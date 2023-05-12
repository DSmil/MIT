import styled from 'styled-components';

export const LoaderImage = styled.svg`
  display: inline-block;
  margin-right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  color: #718096; /*text-gray-200*/
  animation: spin 1s linear infinite;
  fill: #48bb78; /*fill-emerald-500*/

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;