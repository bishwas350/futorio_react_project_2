import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './component/Heading'
import Flex from './component/Flex'
import Container from './component/Container'
import Button from './component/Button'
import Menu from './component/Menu'
import Image from './component/Image'
import Logo from './assets/IMAGE/01.png'
import { IoIosContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Bed from './assets/IMAGE/04.png'
import Room from './assets/IMAGE/06.png'
import Mad from './assets/IMAGE/03.png'
import Kana from './assets/IMAGE/02.png'
import Inner from './assets/IMAGE/08.png'
import Innerr from './assets/IMAGE/09.png'
import { FaArrowRight } from "react-icons/fa";
import Sosta from './assets/IMAGE/10.png'
import Pro from './assets/IMAGE/11.png'
// import { CiUser, CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Container part */}
      <div className="py-5 ">
        <Container>
          <Flex className={'justify-between'}>
            <div className="">
              <Image className={Logo} src={Logo} />
            </div>
            <div className="">
              <Flex className={'space-x-20 font-pop font-medium '}>
                <Menu mText={'Home'} />
                <Menu mText={'Shop'} />
                <Menu mText={'About'} />
                <Menu mText={'Contact'} />
              </Flex>
            </div>
            <div className="">
              <Flex className={'space-x-7 text-2xl text-black '}>
                <IoIosContact />
                <CiSearch />
                <CiHeart />
                <IoCartOutline />

              </Flex>

            </div>
          </Flex>
        </Container>
      </div>
      {/* container part end */}
      {/* Banner part Start  */}
      <div className="bg-intirior bg-no-repeat bg-cover pt-36 pb-28 bg-center ">
        <Container>
          <div className="w-[643px] bg-backgroundColor  ml-auto px-[40px] pb-[37px] pt-[65px] rounded-[10px] ">
            <Heading as={'h3'} text={'New Arrival'} className={'font-pop font-semibold text-newColor'} />
            <Heading as={'h1'} text={'Discover Our New Collection'} className={'text-textColor font-pop text-[52px] leading-[65px] font-bold pb-[14px] pr-[96px]'} />
            <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'} className={'font-pop font-medium text-lg leading-6 pl-[10px] pb-[46px]'} />
            <Button btnText={"BUY NOW"} className={'py-[15px] px-[35px] bg-ButtonCOlor font-pop font-bold text-white '} />
          </div>
        </Container>
      </div>
      {/* Banner part end  */}

      {/* Browse The Range Start */}
      <div className="">
        <Container>
          <div className="pt-[15px] text-center">
            <Heading as={'h1'} text={'Browse The Range'} className={'fomt-pop font-bold text-[32px] text-newColor'} />
            <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} className={'text-newColor2 text-[20px] font-pop pl-[70px] pb-[50px]'} />
          </div>
          <div className="font-pop font-semibold text-[24px] text-center ">
            <Flex className={'space-x-5 justify-center'}>
              <div className="">
                <Image src={Bed} className={'rounded-[10px]'} />
                <Heading as={'p'} text={'Dining'} />
              </div>
              <div className="">
                <Image src={Room} className={'rounded-[10px]'} />
                <Heading as={'p'} text={'Living'} />
              </div>
              <div className="">
                <Image src={Mad} className={'rounded-[10px]'} />
                <Heading as={'p'} text={'Bedroom'} />
              </div>

            </Flex>
          </div>
        </Container>
      </div>
      {/* Browse The Range End */}

      {/* Our Products part Start  */}
      {/* <div id="product_section font-primary">
        <Container>
          <div className="product_heading mb-8 text-center">
            <Heading
              as={"h2"}
              text={"Our Products"}
              className={"font-bold text-A3A3 text-[40px]"}
            />
          </div>
          <div className="product_wrapper">
            <Flex className={'flex-wrap gap-8'}>
              <div className="product_item relative group">
                <Image
                  src={Kana} alt={Kana}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-30%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Syltherine'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  src={Pro} alt={Pro}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-40%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Leviosa'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                 src={Kana} alt={Kana}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-30%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Syltherine'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  src={Pro} alt={Pro}
                />
                <div className="product_badge absolute top-5 right-5 bg-greenBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"New"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Leviosa'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  src={Kana} alt={Kana}
                />
                <div className="product_badge absolute top-5 right-5 bg-greenBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"New"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Syltherine'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                 src={Pro} alt={Pro}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-40%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Leviosa'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  src={Kana} alt={Kana}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-30%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Syltherine'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  src={Pro} alt={Pro}
                />
                <div className="product_badge absolute top-5 right-5 bg-greenBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"New"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Leviosa'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
            <div className="show_more_btn mt-8 mb-[75px] text-center">
              <Button bText={'Show More'} className={'px-[74px] py-3 mb-6 bg-white text-textColor font-semibold border border-textColor'}/>
            </div>
          </div>
        </Container>
      </div> */}
      {/* Our Products part Start  */}

      {/* inner Part Start  */}

      <div className="bg-innerColor pt-[44px] pb-[44px]">
        <Container>
          <Flex>
            <div className="pt-[223px] pl-[100px] ">
              <Heading as={'h1'} text={'50+ Beautiful rooms inspiration'} className={'font-pop font-bold text-[40px] leading-[120%]'} />
              <Heading as={'p'} text={'Our designer already made a lot of beautiful prototipe of rooms that inspire you'} className={'font-pop font-medium leading-[150%] pb-[25px] max-w-[370px]'} />
              <Button btnText={'Explore More'} className={'px-[36px] py-[12px] bg-ButtonCOlor font-pop font-semibold leading-[150%]  text-white ]'} />
            </div>
            <div className="">
              <Flex className={'space-x-5'}>
                <div className="relative">
                  <Image src={Inner} />
                  <div className=" bg-white absolute p-[12px] left-6 bottom-20   items-end">

                    <Heading as={'p'} text={'01--Bed Room'} className={'font-pop font-medium leading-[150%]'} />
                    <Heading as={'p'} text={'Inner Peace'} className={'font-pop font-semibold text-[28px] leading-[120%] '} />
                  </div>
                  <div className="relative px-[10px] py-[10px] inline-block  bg-ButtonCOlor left-[66%] bottom-20 -translate-x-1/2">
                    <FaArrowRight className={'text-4xl  text-white'} />

                  </div>
                </div>
                <Image src={Innerr} className={'h-[456px] w-[272px]'} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* inner Part end  */}

      {/* Dashboard start  */}
      <div className="pt-[45px] pb-[160px]">
        <Container>
          <Flex className={'border-b border-[#D9D9D9] pb-[150px]'}>
            <div className="">
              <Image src={Sosta} className={'pb-[50px] pt-[66px]'} />
              <div className="">
                <Heading as={'p'} text={"400 University Drive Suite 200 Coral Gables,FL 33134 USA"} className={'max-w-[285px] text-[#9F9F9F] font-pop '} />
              </div>
            </div>
            <div className='ml-[145px]'>
               <Flex className={'flex-col space-y-5 font-pop font-medium'}>
                  <Menu mText={'Link'} className={'text-[#9F9F9F]'}/>
                  <Menu mText={'Home'}/>
                  <Menu mText={'Shop'}/>
                  <Menu mText={'About'}/>
                  <Menu mText={'Contact'}/>
               </Flex>
            </div>
            <div className="">
              <div className="ml-[161px]">
              <Flex className={'flex-col space-y-11 font-pop font-medium'}>
                  <Menu mText={'Help'} className={'text-[#9F9F9F]'}/>
                  <Menu mText={'Payment Options'}/>
                  <Menu mText={'Returns'}/>
                  <Menu mText={'Privacy Policies'}/>
                  
               </Flex>
              </div>
            </div>
            <div className="ml-[170px]">
              <Heading as={'h6'} text={'Newsletter'} className={'font-medium text-F9F9 mb-12'}/>
              <div className="newsletter_input flex space-x-4">
                <Heading as={'p'} text={'Enter Your Email Address'} className={'text-F9F9 text-sm border-b border-black'}/>
                <Heading as={'p'} text={'Subscribe'} className={'text-sm uppercase font-medium border-b border-black'}/>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Dashboard end  */}
    </>
  )
}

export default App
