import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <div>
                <Container>
                    <Section title ="Model S" 
                    description="Order Online Future For You" 
                    backgroundImg= "model-s.jpg" 
                    leftBtnText = "Custom Order" 
                    rightBtnText = "Existing inventory"  />

                    <Section title ="Model 3" 
                    description="Order Online Future For You" 
                    backgroundImg= "model-3.jpg" 
                    leftBtnText = "Custom Order" 
                    rightBtnText = "Existing inventory"  />

                    <Section 
                        title ="Model X" 
                    description="Order Online Future For You" 
                    backgroundImg= "model-x.jpg" 
                    leftBtnText = "Custom Order" 
                    rightBtnText = "Existing inventory"  
                    />

                    <Section 
                        title ="Model Y" 
                    description="Order Online Future For You" 
                    backgroundImg= "model-y.jpg" 
                    leftBtnText = "Custom Order" 
                    rightBtnText = "Existing inventory"  
                    />

                    <Section 
                        title ="Lowest Cost Solar Panels in India" 
                    description="Money back Gurantee" 
                    backgroundImg= "solar-panel.jpg" 
                    leftBtnText = "Order Now" 
                    rightBtnText = "Learn More"  
                    />
                </Container>
        </div>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`