import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Footer from "../../components/footer/footer.jsx"
import Banner from "../../components/banner/banner.jsx"
import SectionGrid from "../../components/SectionGrid/SectionGrid.jsx"
import Appartment from "../../assets/file.jsx"
import { Link } from "react-router-dom"
import './index.scss'

const bannerImg = {
    backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BCTKZ3CtVFUIrFClko1fAMzHHiN7HEQbrtYs-td2u2-E4pu3~6FjjcPXQoh6OKLhoQ71BSg4TX1y4A1Exe6CA5tKNBVz3ETKpZRCCXFm-JYkLPPmUoqvZyHMBeAdzAVFvW14gfI7kgqL6dsc0DVPdCGGz2004oQZLohORb6d3UWLKxX9wnjdgeLEC6KMVNkPAVMjeyKAnueZok9ig1nGaljXg4n6tE1E1rKYryme5fBiGsuX2O0oy9AmHSwvjJf5GCwJJBupyqtRrA7RNFaNUvIZyxvbpcLMXCcL-9-HHsoCO3d6aUwkQ8Y4cjZSscKWxVmeHibawc6aMfwYDnjWVQ__")',
}

function Index() {
    return (
        <div>
            <Navbar />
            <Banner style={bannerImg} title="Chez vous, partout et ailleurs" className="home-banner" />

            <SectionGrid>
                {Appartment.map((appart) => (
                    <figure key={appart.id}>
                        <Link to={`/details/${appart.id}`}>
                            <img src={appart.cover} alt={appart.title} />
                            <figcaption>{appart.title}</figcaption>
                        </Link>
                    </figure>
                ))}
            </SectionGrid>
                
            <Footer />
        </div>
    )
}

export default Index