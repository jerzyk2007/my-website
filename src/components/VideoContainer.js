import './VideoContainer.css';
const VideoContainer = () => {
    return (
        <div className='video-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted></video>
        </div>
    );
};

export default VideoContainer;