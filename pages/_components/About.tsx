import { AboutType } from "../_template_data/About"


export default function About({ data, AboutImage }: { data: AboutType, AboutImage: string }) {
    return (
        <div id="about" className='page component'>
            <div className='row'>
                <div className='col flex-1 max-md:flex-none items-center justify-center w-[90%]'>
                    <img
                        src={AboutImage}
                        alt="About image"
                        className="w-[40vw] max-md:w-full max-md:mb-10 border-gray-800 border-8"
                    />
                </div>
                <div className='col flex-1 max-md:flex-none max-md:mt-6 items-center justify-center'>
                    <div className="col w-[90%]">
                        <p className="title justify-start mb-20 text-gray-800">About <span className='text-[#37c598]'>Auth</span>Hacks</p>
                        <p className="text-lg">{ data.firstParagraph }</p>
                        <br />
                        <p className="text-lg">{ data.secondParagraph }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
