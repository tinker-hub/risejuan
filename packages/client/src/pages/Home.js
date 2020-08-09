import React from 'react';
import { Container, Box, Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import useSWR from 'swr';

import { SlideShow, SlideShowButton } from './home/SlideShow';

import { Campaign, FixedHeader, Footer } from '../components';
import { GET_ALL_CAMPAIGNS_URL } from '../constants/api';

import { fetcher } from '../utils/fetcher';

const SectionBox = styled(Box)({
  backgroundColor: 'transparent',
});

const SectionBoxColored = styled(Box)({
  backgroundColor: '#F8F5F6',
});

const SectionContainer = styled(Container)({
  display: 'flex',
  width: '70vw',
  flexDirection: 'column',
  paddingTop: 50,
  paddingBottom: 30,
});

const SectionDescription = styled(Box)({
  marginTop: 20,
  width: '50vw',
  minWidth: 200,
});

const SeeMoreButton = styled(Button)({
  margin: 20,
  alignSelf: 'flex-end',
  textTransform: 'none',
  fontSize: 16,
  color: '#666666',
});

const FeatureGrid = styled(Grid)({
  padding: 15,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: 20,
  textAlign: 'center',
  minWidth: 200,
});

const FeatureDescription = styled(Box)({
  marginTop: 20,
});

const FeatureGridButton = styled(SlideShowButton)({
  alignSelf: 'center',
  marginTop: 30,
});

export const Home = () => {
  const { data: campaigns } = useSWR(GET_ALL_CAMPAIGNS_URL, fetcher);

  console.log('campaigns', campaigns);

  return (
    <Box>
      <FixedHeader />
      <SlideShow />
      <SectionBox>
        <SectionContainer>
          <Box fontWeight="fontWeightBold" fontSize={28}>
            Latest Campaigns
          </Box>
          <Grid container direction="row" justify="space-evenly">
            <Campaign />
            <Campaign />
            <Campaign />
          </Grid>
          <SeeMoreButton color="primary" size="large">
            See more
          </SeeMoreButton>
        </SectionContainer>
      </SectionBox>
      <SectionBoxColored>
        <SectionContainer>
          <Box
            fontWeight="fontWeightBold"
            fontSize={28}
            alignSelf="center"
            textAlign="center"
          >
            Helping communities without losing a dime
          </Box>
          <Grid container direction="row" justify="space-evenly">
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Grow your business
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                Each product you donate to communities in need will help you
                create an income.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Campaign in minutes
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                You can setup and share your Rise Juan campaign in minutes.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Product Promotion
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                More and more communities will have the chance to experience
                your product.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Giving Chance
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                This is your opportunity to donate and help communities and
                groups in need.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Business Publicity
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                Campaigning for a cause can help you advertise your product and
                create an image for your business.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Win Win
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                You have nothing to lose when helping out someone. Start your
                Rise Juan Campaign today!
              </FeatureDescription>
            </FeatureGrid>
          </Grid>
          <FeatureGridButton size="large" variant="contained">
            Campaign with RiseJuan
          </FeatureGridButton>
        </SectionContainer>
      </SectionBoxColored>
      <SectionBox>
        <SectionContainer>
          <Box
            fontWeight="fontWeightBold"
            fontSize={28}
            alignSelf="center"
            textAlign="center"
          >
            Why Rise Juan is like no other
          </Box>
          <SectionDescription
            fontWeight="fontWeightLight"
            fontSize={24}
            alignSelf="center"
            textAlign="center"
          >
            We believe that any little act of kindness can create an endless
            ripple. Rise Juan focuses on helping communities and groups in need
            without setting local businesses aside. We create an opportunity for
            local businesses to grow and promote their products through the act
            of giving.
          </SectionDescription>
          <FeatureGridButton size="large" variant="contained">
            Campaign with RiseJuan
          </FeatureGridButton>
        </SectionContainer>
      </SectionBox>
      <SectionBoxColored>
        <SectionContainer>
          <Box fontWeight="fontWeightBold" fontSize={28}>
            Rise Juan Campaigns near you
          </Box>
          <Grid container direction="row" justify="space-evenly">
            <Campaign />
            <Campaign />
            <Campaign />
            <Campaign />
            <Campaign />
            <Campaign />
          </Grid>
          <SeeMoreButton color="primary" size="large">
            See more
          </SeeMoreButton>
        </SectionContainer>
      </SectionBoxColored>
      <Footer />
    </Box>
  );
};
