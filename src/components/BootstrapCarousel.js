import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import EtherealSite from "../media/ethereal_site.png";
import Wordle from "../media/gordle.png";
import iPhone from "../media/iphone.png";

export default function BootstrapCarousel() {
  return (
    <div class="carousel-things">
      <Carousel>
        <Carousel.Item>
          <div class="row">
            <img class="project-image" src={iPhone} />
          </div>
          <div>
            <Carousel.Caption class="row project-desc">
              <h3 class="project-title">iPhone 13 Pro</h3>
              <p class="project-data no-links">
                iPhone 13 Pro marketing website using GreenSock. Capstone
                project from a web development course, with a few of my own
                animations. Banner zoom-in video created in Blender.
              </p>
              <div class="image-link-section iphone-links">
                <a
                  class="image-link-left"
                  href="https://iphone-13-website.vercel.app/"
                >
                  View the repo
                </a>

                <a
                  class="image-link-right"
                  href="https://github.com/danrobinson94/iPhone_13_Website"
                >
                  Website
                </a>
              </div>
              {/* <div class="bot-link-spacer" /> */}
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
              {/* <div class="optional-spacer" /> */}
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
              {/* <div class="project-link-spacer" /> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
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
                and property filtering inputs, and keeps track of competing
                offers to automatically outbid them if within user parameters.
              </p>
              <a href="https://github.com/danrobinson94/rich_ape_bot_club">
                View the repo
              </a>
              {/* <div class="bot-link-spacer" /> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item class="carousel-things">
          <div class="row">
            <img class="project-image" src={EtherealSite} />
          </div>

          <div>
            <Carousel.Caption class="row project-desc">
              <h3 class="row project-title image-title">Ethereal Art</h3>
              <p class="row project-data">
                Developer and Community Manager for Ethereal Art, a collection
                of 7,777 Ethereum NFT's. Assisted in art/metadata generation and
                front end development. Managed discord server with 120,000+
                members.
              </p>

              <div class="image-link-section">
                <a
                  class="image-link-left"
                  href="https://twitter.com/etherealartnft"
                >
                  Ethereal Art Twitter
                </a>

                <a
                  class="image-link-right"
                  href="https://opensea.io/collection/etherealartorigins"
                >
                  Ethereal Art on Opensea
                </a>
              </div>
              {/* <div class="project-link-spacer" /> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row">
            <img class="project-image" src={Wordle} />
          </div>
          <div>
            <Carousel.Caption class="row project-desc">
              <h3 class="project-title">Gordle</h3>
              <p class="project-data no-links">
                A Wordle game clone built in GoLang. A little sassy - will play
                good cop/bad cop with you.
              </p>
              <a
                class="image-link-center"
                href="https://github.com/danrobinson94/Gordle"
              >
                View the Repo
              </a>
              {/* <div class="project-link-spacer" /> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row">
            <ReactPlayer
              class="proj-media"
              url="https://player.vimeo.com/video/717412019?h=98b2a87347"
              height="420px"
              width="750px"
            />
          </div>
          <div>
            <Carousel.Caption class="row project-desc">
              <h3 class="project-title">Go Go Gadget Blockchain</h3>
              <p class="project-data no-links">
                World's most simple blockchain, built in Go
              </p>
              <a
                class="image-link-center"
                href="https://github.com/danrobinson94/Go_Go_Gadget_Blockchain/tree/main"
              >
                View the Repo
              </a>
              {/* <div class="project-link-spacer" /> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
