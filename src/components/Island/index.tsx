import {
  Wrapper,
  ProgressBar,
  Avatar,
  Details,
  Banner,
  Info,
  LinkWrapper,
  BannerOverlay,
  ProgressText,
} from './styles';

import { ReactComponent as LessonIcon } from '../../assets/literature.svg';
import { ReactComponent as PenIcon } from '../../assets/pen.svg';
import { ReactComponent as VideoIcon } from '../../assets/video.svg';

import { Button } from '../../components';

type IslandProps = {
  progress: number;
  author: {
    profilePic: string;
    name: string;
  };
  bannerUrl: string;
  title: string;
  lessons: number;
  tasks: number;
  duration: number;
  continueToUrl: string;
  moreUrl: string;
};

export default function Island({
  author,
  bannerUrl,
  continueToUrl,
  duration,
  lessons,
  moreUrl,
  progress,
  tasks,
  title,
}: IslandProps) {
  return (
    <Wrapper>
      {progress > 0 && (
        <>
          <ProgressBar progress={progress}></ProgressBar>
          <ProgressText>Progress: {progress}%</ProgressText>
        </>
      )}
      <BannerOverlay></BannerOverlay>
      <Banner src={bannerUrl} alt={`${author.name} banner`} />
      <Avatar>
        <img src={author.profilePic} alt={author.name} />
        <span>{author.name}</span>
      </Avatar>
      <Details>
        <h2>{title.length > 58 ? `${title.substring(0, 58)}...` : title}</h2>
        <Info>
          <div>
            <LessonIcon />
            <span>{lessons} lessons</span>
          </div>
          <div>
            <PenIcon />
            <span>{tasks} tasks</span>
          </div>
          <div>
            <VideoIcon />
            <span>{duration} minutes</span>
          </div>
        </Info>
        <LinkWrapper>
          <a href={continueToUrl}>
            <Button label='Continue' variant='secondary' />
          </a>
          <a href={moreUrl}>
            <Button label='More' variant='flat' />
          </a>
        </LinkWrapper>
      </Details>
    </Wrapper>
  );
}
