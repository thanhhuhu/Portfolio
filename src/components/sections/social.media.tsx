import {FaFacebook} from "react-icons/fa6";
import {SiUdemy} from "react-icons/si";
import {FaGithub, FaTiktok} from "react-icons/fa";
import {SiYoutubeshorts} from "react-icons/si";
import About from "pages/about.tsx";
import {DiGithub} from "react-icons/di";

interface IProps {
    youtube: string,
    tiktok: string,
    udemy: string,
    facebook: string,
    github: string
}

const SocialMedia = (props: IProps) => {
    const {youtube, tiktok, udemy, facebook, github} = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            {/*<a href={youtube} target='_blank' className="highlight" title="">*/}
            {/*    <SiYoutubeshorts size={30}/>*/}
            {/*</a>*/}
            {/*<a href={tiktok} target='_blank' className="highlight" title="">*/}
            {/*    <FaTiktok size={30}/>*/}
            {/*</a>*/}
            {/*<a href={udemy} target='_blank' className="highlight" title="">*/}
            {/*    <SiUdemy size={30}/>*/}
            {/*</a>*/}
            <a href={facebook} target='_blank' className="highlight" title="Facebook">
                <FaFacebook size={30}/>
            </a>
            <a href={github} target='_blank' className="highlight" title="github">
                <FaGithub size={30}/>
            </a>
        </div>
    )
}

export default SocialMedia;