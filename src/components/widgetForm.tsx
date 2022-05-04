import { CloseButton } from "./CloserButton";
import BugImage from '../assets/bug.svg';
import IdeaImage from '../assets/idea.svg';
import ThoughtImage from '../assets/thought.svg';
const feedbackTypes={
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
export function WidgetForm(){
    return(
        <>
            <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vh-2rem)] md:w-auto">
                <header>
                    <span className="text-xl leading-6">Deixe seu Feedback</span>
                    <CloseButton/>
                </header>
                <div className=" flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key,value])=>{                     
                        return (
                            <button>
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        );
                    })}
                </div>
                <footer className="text-xs text-neutral-400">
                    feito com amor por <a className="underline underline-offset-2" href='https://github.com/juliovianadev'>Tomate</a> 
                </footer>
            </div>
        </>
    )
}