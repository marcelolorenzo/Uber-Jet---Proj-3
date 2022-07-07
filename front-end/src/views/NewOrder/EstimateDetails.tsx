import styled from "styled-components"

export function EstimateDetails() {
    return (
        <WithoutEstimateStyled className="d-none d-md-flex">
            <p className="m-0 ">Fill in the data on the side to see the price</p>
        </WithoutEstimateStyled>
    )
}

const WithoutEstimateStyled = styled.div` 
    background-color: #efefef;
    border: 1px dashed #000;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 130px;
    text-align: center;
`