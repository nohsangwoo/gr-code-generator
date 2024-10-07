'use client'

import { useState, useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
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

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: #4c1d95;
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

const QRCodeContainer = styled(motion.div)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const DownloadButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: #4c1d95;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #5b21b6;
  }
`

export default function Home() {
  const [url, setUrl] = useState('')
  const [qrSize, setQrSize] = useState(256)
  const [qrColor, setQrColor] = useState('#000000')
  const qrRef = useRef<SVGSVGElement>(null)

  const downloadQRCode = () => {
    if (qrRef.current) {
      const canvas = document.createElement('canvas')
      const svg = qrRef.current
      const box = svg.getBoundingClientRect()
      canvas.width = box.width
      canvas.height = box.height
      const ctx = canvas.getContext('2d')
      const data = new XMLSerializer().serializeToString(svg)
      const DOMURL = window.URL || window.webkitURL || window
      const img = new Image()
      const svgBlob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' })
      const url = DOMURL.createObjectURL(svgBlob)

      img.onload = () => {
        if (ctx) {
          ctx.drawImage(img, 0, 0)
          DOMURL.revokeObjectURL(url)
          const imgURI = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream')

          const downloadLink = document.createElement('a')
          downloadLink.href = imgURI
          downloadLink.download = 'qrcode.png'
          document.body.appendChild(downloadLink)
          downloadLink.click()
          document.body.removeChild(downloadLink)
        }
      }
      img.src = url
    }
  }

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        QR 코드 생성기
      </Title>
      <Form onSubmit={(e) => e.preventDefault()}>
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
        <InputGroup>
          <Label htmlFor="size">QR 코드 크기 (픽셀)</Label>
          <Input
            id="size"
            type="number"
            placeholder="256"
            value={qrSize}
            onChange={(e) => setQrSize(Number(e.target.value))}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="color">QR 코드 색상</Label>
          <ColorInput
            id="color"
            type="color"
            value={qrColor}
            onChange={(e) => setQrColor(e.target.value)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </InputGroup>
      </Form>
      {url && (
        <QRCodeContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <QRCodeSVG ref={qrRef} value={url} size={qrSize} fgColor={qrColor} />
        </QRCodeContainer>
      )}
      {url && (
        <DownloadButton
          onClick={downloadQRCode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          QR 코드 다운로드
        </DownloadButton>
      )}
    </Container>
  )
}
