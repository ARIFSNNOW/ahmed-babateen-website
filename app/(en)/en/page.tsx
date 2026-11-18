import { Home } from '../../../components/home';
import { profile, origin } from '../../../lib/data';
export default function Page(){const person={'@context':'https://schema.org','@type':'Person',name:'Ahmed Babateen',honorificPrefix:'Dr.',honorificSuffix:'DDS',jobTitle:'Dentist',url:origin,email:profile.email,telephone:profile.phone,sameAs:[profile.instagram,profile.linkedin],knowsLanguage:['Arabic','English','Italian']};return <main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person)}}/><Home locale="en"/></main>}
