import './Video.css';
const Video = () => {
    return (
        <div className='video'>
            <video
                className="video__container"
                src="/videos/video-1.mp4" autoPlay loop muted></video>
        </div>
    );
};

export default Video;