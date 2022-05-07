import { CloseButton } from "../CloserButton";
import BugImage from '../../assets/bug.svg';
import IdeaImage from '../../assets/idea.svg';
import ThoughtImage from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";
export const feedbackTypes={
    BUG: {
        title: 'Problema',
        image:{
            source:BugImage,
            alt:'Imagem de Bug'
        },
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source:IdeaImage,
            alt:'Imagem de Ideia'
        },
    },
    OTHER:{
        title: 'Outro',
        image:{
            source:ThoughtImage,
            alt:'Imagem de outro'
        },
    },
}

export type FeedbackType = keyof typeof feedbackTypes;    
export function WidgetForm(){
    const [feedbackType,setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent,setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return(
        <>
            <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vh-2rem)] md:w-auto">
              
            {feedbackSent?(
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ):(
                <>
                       {!feedbackType ?(
                   <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType}/>
                    ) :(
                        <FeedbackContentStep 
                            feedbackType={feedbackType}
                            onFeedbackSent={()=>setFeedbackSent(true)}
                            onFeedbackRestartRequested={handleRestartFeedback}
                        />
                    )}
                </>
            )}
                <footer className="text-xs text-neutral-400">
                    feito com amor por <a className="underline underline-offset-2" href='https://github.com/juliovianadev'>Tomate</a> 
                </footer>
            </div>
        </>
    )
}