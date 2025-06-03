import React from 'react'

interface SPSAdminIconProps {
  className?: string
  size?: number
}

export const SPSAdminIcon: React.FC<SPSAdminIconProps> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 背景圆形 */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="url(#gradient1)"
        stroke="#2563eb"
        strokeWidth="2"
      />
      
      {/* 盾牌形状 */}
      <path
        d="M32 8 L20 16 L20 32 Q20 44 32 52 Q44 44 44 32 L44 16 Z"
        fill="url(#gradient2)"
        stroke="#1e40af"
        strokeWidth="1.5"
      />
      
      {/* 齿轮图标 */}
      <g transform="translate(32, 32)">
        <circle
          cx="0"
          cy="0"
          r="8"
          fill="#ffffff"
          stroke="#1e40af"
          strokeWidth="1"
        />
        <circle
          cx="0"
          cy="0"
          r="4"
          fill="#1e40af"
        />
        
        {/* 齿轮齿 */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <rect
            key={index}
            x="-1"
            y="-12"
            width="2"
            height="4"
            fill="#1e40af"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
      
      {/* 用户图标 */}
      <g transform="translate(24, 20)">
        <circle
          cx="0"
          cy="0"
          r="3"
          fill="#ffffff"
        />
        <path
          d="M -4 8 Q -4 4 0 4 Q 4 4 4 8"
          fill="#ffffff"
        />
      </g>
      
      {/* 邮件图标 */}
      <g transform="translate(40, 44)">
        <rect
          x="-6"
          y="-3"
          width="12"
          height="8"
          rx="1"
          fill="#ffffff"
          stroke="#1e40af"
          strokeWidth="1"
        />
        <path
          d="M -6 -3 L 0 2 L 6 -3"
          stroke="#1e40af"
          strokeWidth="1"
          fill="none"
        />
      </g>
      
      {/* 渐变定义 */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SPSAdminIcon 