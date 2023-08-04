export default function Application({ application }: { application: any }) {
    return (
        <div className='col bg-[#efefef] p-8 px-12 pb-12 shadow-xl mt-6'>
            <h1 className="text-4xl mb-8 text-blue-500">My Application</h1>
            <div className='bg-[#fafafa] p-6'>
                {Object.keys(application).map((app, i) => (
                    <div key={i} className={`mb-4`}>
                        <p className='text-lg'>{app}</p>
                        <p className='text-xl'>{application[app]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
