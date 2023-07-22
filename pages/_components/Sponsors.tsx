import { SponsorType } from '../_template_data/Sponsor'


export default function Sponsors({ data }: { data: SponsorType[] }) {
    return (
        <div id="sponsors" className='page component'>
            <p className='title'>Sponsors</p>
            <div className='row w-full'>
                {data.map((obj, i) => (
                    <div key={i} className='row justify-start m-10'>
                        <img
                            src={obj.img}
                            alt="sponsor img"
                            className="w-[35vh] object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
