"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, Send, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FAQFeedbackProps {
  questionId: string
  question: string
}

export function FAQFeedback({ questionId, question }: FAQFeedbackProps) {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null)
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    if (submitted) return

    setFeedback(type)

    // If not helpful, show comment box
    if (type === "not-helpful") {
      setShowCommentBox(true)
    } else {
      // For helpful feedback, submit immediately
      submitFeedback(type)
    }
  }

  const submitFeedback = async (type: "helpful" | "not-helpful", userComment = "") => {
    if (submitted) return

    setSubmitting(true)

    // Here you would normally send the feedback to your server
    // For now, we'll just simulate a network request
    console.log({
      questionId,
      question,
      feedbackType: type,
      comment: userComment,
      timestamp: new Date().toISOString(),
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    setSubmitted(true)
    setSubmitting(false)
  }

  const handleCommentSubmit = () => {
    submitFeedback(feedback!, comment)
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center py-2 text-green-600 animate-fade-in">
        <Check className="mr-2" size={16} />
        <span className="text-sm">Thank you for your feedback!</span>
      </div>
    )
  }

  return (
    <div className="mt-4 border-t pt-3">
      <p className="text-sm text-gray-500 mb-2">Was this answer helpful?</p>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "flex items-center gap-1 text-sm",
            feedback === "helpful" && "bg-green-50 border-green-200 text-green-600",
          )}
          onClick={() => handleFeedback("helpful")}
          disabled={submitting}
        >
          <ThumbsUp size={14} />
          <span>Yes</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "flex items-center gap-1 text-sm",
            feedback === "not-helpful" && "bg-red-50 border-red-200 text-red-600",
          )}
          onClick={() => handleFeedback("not-helpful")}
          disabled={submitting}
        >
          <ThumbsDown size={14} />
          <span>No</span>
        </Button>
      </div>

      {showCommentBox && feedback === "not-helpful" && !submitted && (
        <div className="mt-3 animate-fade-in">
          <p className="text-sm text-gray-500 mb-1">How can we improve this answer?</p>
          <div className="flex flex-col gap-2">
            <Textarea
              placeholder="Your feedback helps us improve our content..."
              className="text-sm min-h-[80px]"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-end">
              <Button size="sm" className="flex items-center gap-1" onClick={handleCommentSubmit} disabled={submitting}>
                {submitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send size={14} />
                    <span>Submit Feedback</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
