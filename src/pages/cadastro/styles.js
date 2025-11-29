import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 78%;
    margin: 0 auto;
    margin-top: 110px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Wrapper = styled.div`
    max-width: 320px;
    width: 100%;
`;

export const Column = styled.div`
    flex: ${({ flex }) => flex || 1};
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TxtLoginDiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 18px;
    max-width: 90%;

    color: #FFF;
`;

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    margin-bottom: 6px;
`;

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 30px;
`;

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #E5E044;
`;

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size:

