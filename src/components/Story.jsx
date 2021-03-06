import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const Wrapper = styled.div`
  ${tw`absolute text-white `}
`;

const SectionWrapper = styled.section`
  ${tw`flex flex-col justify-center items-center md:text-center mb-4 mx-12 sm:mx-48 max-w-screen-md`}
`;

const Title = styled.h1`
  ${tw`md:text-5xl lg:text-6xl`}
`;

const SubTitle = styled.h2`
  ${tw`text-lg md:text-3xl lg:text-4xl mb-2 md:mb-6`}
`;

const Text = styled.p`
  ${tw`mb-1 md:mb-3 text-sm md:text-lg lg:text-2xl`}
`;

const Story = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <Title>Gramma’s Oven</Title>
        <SubTitle>European Bakery & Café </SubTitle>
      </SectionWrapper>
      <SectionWrapper>
        <SubTitle>Serving The Community</SubTitle>
        <Text>
          Since 2000, the communities of Oak Ridges, Richmond Hill, King City
          and Aurora have been stopping in for a bite to eat.
        </Text>
        <Text>
          We proudly serve our customers with a delicious assortment of
          specialty breads and pastries from our extensive menu.{" "}
        </Text>
      </SectionWrapper>
      <SectionWrapper>
        <SubTitle>Our Specialties</SubTitle>
        <Text>
          The store front is filled with a fragrant mix of smells. Our specialty
          breads and pastries originate mostly from Poland and Germany.
        </Text>
        <Text>
          From our popular walnut bread, to our tasty sourdough, to our
          delightful chocolate croissants, there is something for everyone.
        </Text>
        <Text>
          Stop in for one of these, and grab some warm soup, a fresh sandwich
          and a cup of coffee to go!
        </Text>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Story;
