import { getServerSession } from 'next-auth'
import { authOptions } from '../utils/options'

import Header from "../components/dashboard_components/Header"
import Status from "../components/dashboard_components/Status"
import Form from "../components/dashboard_components/Form"
import Application from "../components/dashboard_components/Application"
import Info from "../components/dashboard_components/Info"

import { AnnouncementsList } from "@/template_data/Announcements"


export default function Dashboard({ airtableRecord }: { airtableRecord: any }) {
    return (
        <div className='page space'>
            <div className="w-[90%]">
                <Header />
                {airtableRecord ?
                    <>
                        <Status accepted={airtableRecord['Accepted']} />
                        {airtableRecord['Accepted'] && 
                            <Info data={AnnouncementsList} />
                        }
                        <Application application={airtableRecord} />
                    </>
                    :
                    <Form />
                }
            </div>
        </div>
    )
}


export async function getServerSideProps(context: any) {
    const session = await getServerSession(context.req, context.res, authOptions)
    const headers = context.req.headers

    if (!session) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
    }
    
    const email = encodeURIComponent(session?.user?.email || "")
    

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/airtable?email=${email}`, {
        headers: headers
    })
    
    const data = await res.json()
    const airtableRecord = data.body || null;

    return { props: { airtableRecord } }
}
