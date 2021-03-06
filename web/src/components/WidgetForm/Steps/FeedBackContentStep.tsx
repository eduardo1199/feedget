import { ArrowLeft } from "phosphor-react";
import { FeedBackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedBackContentStep {
  feedBackType: FeedBackType;
  onFeedbackRestartRequest: () => void;
}

export function FeedBackContentStep({ feedBackType, onFeedbackRestartRequest }: FeedBackContentStep) {

  const feedbackTypesInfo = feedbackTypes[feedBackType];

  return(
    <>
      <header>
        <button 
          type="button" 
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequest}
        >
          <ArrowLeft width="bold" className="w-4 h4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img 
            src={feedbackTypesInfo.image.source} 
            alt={feedbackTypesInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypesInfo.title}
        </span>

        <CloseButton />
      </header>
      <form className="my-4 w-full">
        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </form>
    </>
  )
}