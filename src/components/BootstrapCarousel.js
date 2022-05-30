import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function BootstrapCarousel() {
  return (
    <div class="carousel-things">
      <Carousel>
        <Carousel.Item>
          <div class="row">
            <ReactPlayer
              class="proj-media"
              url="https://player.vimeo.com/video/714608664?h=98866b7d23"
              height="420px"
              width="750px"
            />
          </div>
          <div>
            <Carousel.Caption class="row project-desc">
              <h3 class="project-title">Rich Ape Bot Club</h3>
              <p class="project-data no-links">
                Built in Node with Puppeteer. Logs in to Metamask Chrome
                extension. Creates offers on NFT's based on user's collection
                and property filtering inputs
              </p>
              <div class="project-link-spacer" />
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item class="carousel-things">
          <div class="row">
            <ReactPlayer
              class="proj-media"
              url="https://player.vimeo.com/video/715071740?h=b700aacfc8"
              height="420px"
              width="750px"
            />
          </div>

          <div>
            <Carousel.Caption class="row project-desc">
              <h3 class="row project-title">NFsTripes</h3>
              <p class="row project-data">
                Collection of 250 unique Ethereum Rinkby NFT's generated in
                Node. Minting Dapp built in React. Metadata hosted on IPFS,
                images hosted on AWS.
              </p>
              <div class="project-link-section">
                <a
                  class="project-link-left"
                  href="https://nfstripes-dan94robinson.vercel.app/"
                >
                  Mint an NFsTripe
                </a>
                <a
                  class="project-link-center"
                  href="https://github.com/tacobellfiend/NFsTripes_App"
                >
                  View the repo
                </a>
                <a
                  class="project-link-right"
                  href="https://testnets.opensea.io/collection/nft-stripe-collection"
                >
                  NFsTripes on Opensea
                </a>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}