'use client'

import { useState, useRef, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import DisplayLudgi from './components/DisplayLudgi'
import { saveAs } from 'file-saver';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
  overflow-y: auto;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.2;
`

const Subtitle = styled(motion.h2)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.4;
  max-width: 600px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
`

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-size: 0.9rem;
`

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`

const ColorInput = styled(Input)`
  height: 40px;
  padding: 0;
  background: none;
`



const QRCodeContainer = styled(motion.div)`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  overflow: hidden;
`

const DownloadButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: #4c1d95;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #5b21b6;
  }
`

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const Tab = styled(motion.button) <{ active: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: ${props => props.active ? '#4c1d95' : 'rgba(255, 255, 255, 0.2)'};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5b21b6;
  }
`

const Select = styled(motion.select)`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`

const SelectButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`

const DropdownList = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
`

const DropdownItem = styled(motion.li)`
  padding: 0.75rem;
  color: #4c1d95;
  cursor: pointer;

  &:hover {
    background-color: rgba(76, 29, 149, 0.1);
  }
`

const FeatureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0;
  list-style: none;
  max-width: 600px;
`

const FeatureItem = styled(motion.li)`
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #ffffff;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
`

const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  padding: 0 1rem;
  
  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }
`

export default function Home() {
  const [activeTab, setActiveTab] = useState<'url' | 'wifi'>('url')
  const [url, setUrl] = useState('')
  const [ssid, setSsid] = useState('')
  const [password, setPassword] = useState('')
  const [encryption, setEncryption] = useState('WPA')
  const [qrSize, setQrSize] = useState(200)
  const [qrColor, setQrColor] = useState('#000000')
  const qrRef = useRef<SVGSVGElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const encryptionOptions = [
    { value: 'WPA', label: 'WPA/WPA2' },
    { value: 'WEP', label: 'WEP' },
    { value: 'nopass', label: 'No Encryption' },
  ]

  const generateQRValue = () => {
    if (activeTab === 'url') {
      return url
    } else {
      return `WIFI:T:${encryption};S:${ssid};P:${password};;`
    }
  }

  const downloadQRCode = () => {
    if (qrRef.current) {
      const svg = qrRef.current;
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            saveAs(blob, 'qrcode.png');
          }
        });
      };

      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  }

  return (
    <Container>
      <header>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          LUDGI QR Code Generator
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          무료로 URL과 Wi-Fi QR 코드를 즉시 생성하세요
        </Subtitle>
      </header>
      
      <FeatureList>
        <FeatureItem
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          🚀 즉시 생성
        </FeatureItem>
        <FeatureItem
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          🎨 커스터마이징
        </FeatureItem>
        <FeatureItem
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          📱 모바일 최적화
        </FeatureItem>
        <FeatureItem
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          🆓 완전 무료
        </FeatureItem>
      </FeatureList>
      <main>
        <nav aria-label="QR 코드 유형 선택">
          <TabContainer>
        <Tab
          active={activeTab === 'url'}
          onClick={() => setActiveTab('url')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          URL
        </Tab>
        <Tab
          active={activeTab === 'wifi'}
          onClick={() => setActiveTab('wifi')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Wi-Fi
          </Tab>
          </TabContainer>
        </nav>
        <section aria-label="QR 코드 생성 폼">
          <Form onSubmit={(e) => e.preventDefault()}>
        {activeTab === 'url' ? (
          <InputGroup>
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </InputGroup>
        ) : (
          <>
            <InputGroup>
              <Label htmlFor="ssid">Wi-Fi Name (SSID)</Label>
              <Input
                id="ssid"
                type="text"
                placeholder="Your Wi-Fi Name"
                value={ssid}
                onChange={(e) => setSsid(e.target.value)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Wi-Fi Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="encryption">Encryption</Label>
              <SelectWrapper ref={dropdownRef}>
                <SelectButton
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  whileTap={{ scale: 0.98 }}
                >
                  {encryptionOptions.find(option => option.value === encryption)?.label}
                </SelectButton>
                {isDropdownOpen && (
                  <DropdownList
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {encryptionOptions.map((option) => (
                      <DropdownItem
                        key={option.value}
                        onClick={() => {
                          setEncryption(option.value)
                          setIsDropdownOpen(false)
                        }}
                        whileHover={{ backgroundColor: 'rgba(76, 29, 149, 0.2)' }}
                      >
                        {option.label}
                      </DropdownItem>
                    ))}
                  </DropdownList>
                )}
              </SelectWrapper>
            </InputGroup>
          </>
        )}
        <InputGroup>
          <Label htmlFor="size">QR Code Size (pixels)</Label>
          <Input
            id="size"
            type="number"
            placeholder="200"
            value={qrSize}
            onChange={(e) => setQrSize(Math.min(Number(e.target.value), 1024))}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="color">QR Code Color</Label>
          <ColorInput
            id="color"
            type="color"
            value={qrColor}
            onChange={(e) => setQrColor(e.target.value)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </InputGroup>
          </Form>
        </section>

        {(url || (ssid && password)) && (
          <section aria-label="QR 코드 결과">
            <DownloadButton
          onClick={downloadQRCode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download QR Code
            </DownloadButton>

            {(url || (ssid && password)) && (
              <QRCodeContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <QRCodeSVG
            ref={qrRef}
            value={generateQRValue()}
            size={qrSize}
            fgColor={qrColor}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
              </QRCodeContainer>
            )}
          </section>
        )}
      </main>
      <aside aria-label="회사 정보">
        <DisplayLudgi />
      </aside>
      
      <Footer>
        <p>
          © 2024-2025 <a href="https://ludgi.ai" target="_blank" rel="noopener noreferrer">주식회사 럿지 (LUDGI Inc.)</a> | 
          사업자등록번호: 307-88-03283 | 
          <a href="mailto:milli@molluhub.com">Contact</a>
        </p>
        <p>
          <a href="https://ludgi.ai/privacy" target="_blank" rel="noopener noreferrer">개인정보처리방침</a> | 
          <a href="https://ludgi.ai/terms" target="_blank" rel="noopener noreferrer">이용약관</a> | 
          <a href="https://github.com/ludgi" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </Footer>
    </Container>
  )
}