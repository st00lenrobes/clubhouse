import styled from '@emotion/styled';

type BannerProps = {
  mintAddress?: string;
};

const BannerContainer = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'mintAddress',
})<{ minted: boolean }>`
  background: ${({ minted }) => (minted ? '#e42575' : 'black')};
  transform: skewY(33deg);
  position: absolute;
  top: 6%;
  left: 52%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
`;

const Banner = ({ mintAddress }: BannerProps) => {
  console.log('mintAddress:', mintAddress);
  return (
    <BannerContainer minted={!!mintAddress}>
      {mintAddress ? (
        <a
          href={`https://www.magiceden.io/item-details/${mintAddress}`}
          rel="noreferrer"
          style={{ color: 'white' }}
          target="_blank"
        >
          View on ME
        </a>
      ) : (
        'Unminted'
      )}
    </BannerContainer>
  );
};

export default Banner;
