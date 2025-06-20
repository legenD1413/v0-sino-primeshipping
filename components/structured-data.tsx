'use client'

import Script from 'next/script'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service' | 'article' | 'faq'
  data?: any
}

export function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://sinoprimeshipping.com'
    
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SinoPrime Shipping',
          alternateName: 'SinoPrime International Shipping',
          url: baseUrl,
          logo: `${baseUrl}/business-logistics-hero5.png`,
          description: 'Professional international logistics and shipping solutions from China to worldwide destinations',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+86-xxx-xxxx-xxxx', // 请替换为实际电话
              contactType: 'customer service',
              availableLanguage: ['English', 'Chinese']
            }
          ],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'CN', // 请根据实际地址调整
            addressLocality: 'Shanghai' // 请根据实际地址调整
          },
          sameAs: [
            // 请添加您的社交媒体链接
            // 'https://www.linkedin.com/company/sinoprime-shipping',
            // 'https://twitter.com/sinoprimeshipping'
          ],
          serviceArea: {
            '@type': 'Place',
            name: 'Worldwide'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Shipping Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'FBA Prep and Ship Services',
                  description: 'Complete FBA preparation and shipping solutions'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'LCL to Door Shipping',
                  description: 'Less than Container Load shipping solutions'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'FCL Shipping Services',
                  description: 'Full Container Load shipping solutions'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Air Freight Services',
                  description: 'Fast air freight solutions for urgent shipments'
                }
              }
            ]
          }
        }

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SinoPrime Shipping',
          url: baseUrl,
          description: 'Professional international logistics and shipping solutions from China to worldwide destinations',
          publisher: {
            '@type': 'Organization',
            name: 'SinoPrime Shipping'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/blog?search={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        }

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data?.name || 'International Shipping Services',
          description: data?.description || 'Professional logistics and shipping solutions',
          provider: {
            '@type': 'Organization',
            name: 'SinoPrime Shipping',
            url: baseUrl
          },
          serviceType: 'Logistics and Shipping',
          serviceArea: {
            '@type': 'Place',
            name: 'Worldwide'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Shipping Services',
            itemListElement: data?.services || []
          }
        }

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data?.title,
          description: data?.description,
          author: {
            '@type': 'Person',
            name: data?.author || 'SinoPrime Shipping Team'
          },
          publisher: {
            '@type': 'Organization',
            name: 'SinoPrime Shipping',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/business-logistics-hero5.png`
            }
          },
          datePublished: data?.datePublished,
          dateModified: data?.dateModified || data?.datePublished,
          image: data?.image,
          url: data?.url,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data?.url
          }
        }

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.faqs?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })) || []
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
} 