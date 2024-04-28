import {FaGithubSquare} from 'react-icons/fa'
import dev from '../../../public/dev.gif'
export const Info = () => {
  return (
    <div className='bg-emerald-100 py-24'>
        <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
            <article>
                <h1 className="text-7xl font-bold tracking-wider">
                    I'm Manoj
                </h1>
                <p className="mt-4 text-3xl textslate-700 capitalize tracking-wide">
                    FullStack Developer
                </p>
                <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
                crafting seamless experinces, from front-end finesse to back-end brilliance
                </p>
                <div className="flex gap-x-4 mt-4">
                    <a href="#">
                    <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                    </a>
                </div>
            </article>
            <article className='hidden md:block'>
                <img src={dev} className='h-80 lg:h-96' />
            </article>
        </div>
    </div>
    
  )
}
