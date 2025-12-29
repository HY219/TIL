import { useState } from 'react'
import naver_logo from './assets/naver_logo.svg'
import viteLogo from '/vite.svg'
import headBannerAdd from './assets/headBannerAdd.svg'
import imageEx from './assets/imageEx.svg'
import './App.css'

function App() {
  const shortcutTexts = [
    "메일",
    "카페",
    "블로그",
    "스토어",
    "뉴스",
    "증권",
    "부동산",
    "지도",
    "웹툰",
    "치지직",
    "..."
  ]

  const newsstandTexts = [
    "뉴스스탠드",
    "언론사편집",
    "엔터",
    "스포츠",
    "경제",
    "쇼핑투데이"
  ]

  const newsstandMedias = [
    { image: imageEx, agency: "전자신문", text: "“너도 먹어”... 사람에게 먹이주는 범고래, 왜?", date: "07월 14일 14:24" },
    { image: imageEx, agency: "데일리안", text: "[AI에게 물었다] 여름 한정판 콩국수…보양일까, 독일까?", date: "07월 14일 14:19" }

  ]

  const shoppingTexts = [
    "쇼핑",
    "맨즈",
    "원쁠딜",
    "쇼핑라이브"
  ]

  const shoppingSubTexts = [
    "HOT",
    "식품",
    "생활·육아",
    "디지털",
    "패션뷰티",
    "오픈예정"
  ]

  return (
    <div className='max-w-screen-xl min-w-1280 mx-auto px-[30px]'>
      {/* header */}
      <div id='header'>
        <div className='flex justify-between py-2'>
          <div className='flex'>
            <div id='topAsideArea' className='flex px-2'>바로가기</div>
            <div id='topPayArea' className='flex px-2'>pay</div>
          </div>
          <div className='flex'>
            <div id='topTalkArea' className='flex px-2'>네이버톡</div>
            <div id='topNotiArea' className='flex px-2'>알림</div>
            <div id='topShoppingArea' className='flex px-2'>장바구니</div>
          </div>
        </div>
        <div className="relative flex justify-center items-center pb-2">
          <div className="flex flex-col items-center">
            <div id="search_area" className='flex w-[708px] h-[60px] rounded-33 border-2 justify-between items-center px-[27px]'>
              <div id="naver_logo" className='flex pr-[16px]'>N</div>
              <div className='flex'>
                <div className='flex px-[3px]'>키보드</div>
                <div className='flex px-[6px]'>down</div>
                <div className='flex pl-[10px]'>검색</div>
              </div>
            </div>
            <div id="shortcutArea">
              <ul className='flex'>
                {shortcutTexts.map((shortcutText, index) =>
                  <li key={index} className='flex flex-col justify-center items-center w-[64px] h-[68px]'>
                    <span>이미지</span>
                    <span>{shortcutText}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div id="search-right" className="absolute right-4 top-1/2 -translate-y-1/2">
            search-right 광고이미지
          </div>
        </div>
      </div>

      {/* container */}
      <div id='container' className='flex border-b-2'>
        <div id='left_container'>
          <div id='banner_area' className='w-[830px] h-[130px] border rounded-lg'>
            <img src={headBannerAdd} className='object-cover rounded-lg' />
          </div>
          <div id='newsstand_area' className='w-[830px] border rounded-lg mt-4'>
            <div id='newsstand_header' className='flex h-[58px] items-center px-[20px]'>
              <ul className='flex'>
                {newsstandTexts.map((newsstandText, index) =>
                  <li key={index}>
                    <span className={`text-[17px] font-bold ${index === 1 ? 'text-black' : 'text-gray-400'}`}>
                      {newsstandText}
                    </span>
                    {index === 0 &&
                      <span className='text-gray-400'>&nbsp;·&nbsp;</span>
                    }
                    {index < newsstandTexts.length - 1 && index !== 0 &&
                      <span className='text-gray-400'>&nbsp;/&nbsp;</span>
                    }
                  </li>
                )}
              </ul>
            </div>
            <div id='newsstand_subheader' className='flex h-[50px] items-center justify-between mx-[20px] px-[20px] py-[12px]'>
              <div className='flex text-gray-600'>
                <span>분야별 뉴스</span>
                <span className='pt-[3px] pl-[3px] text-[10px]'>▼</span>
                <span>&nbsp;|&nbsp;</span>
                <span>신문</span>
              </div>
              <div className='font-bold'>뉴스홈</div>
            </div>

            <div id='newsstand_media' className='flex my-[18px] mx-[20px]'>
              <div id='newsstand_rightmedia' className='flex w-[385px] h-[224px] mr-[20px]'>
                <ul className='flex flex-col justify-between'>
                  {newsstandMedias.map((newsstandMedia, index) =>
                    <li key={index} className='flex w-full' >
                      <div className='w-[156px] h-[104px] border rounded-lg mr-[16px]'>
                        <img src={newsstandMedia.image} className='w-full h-full object-cover' />
                      </div>
                      <div className='flex flex-col'>
                        <div className='flex w-[213px] justify-between mt-[3px]'>
                          <div className='flex'>
                            <div className='flex w-[22px] h-[22px] rounded-full border items-center justify-center mr-[6px]'>..</div>
                            <div className='flex text-[16px] font-bold'>{newsstandMedia.agency}</div>
                          </div>
                          <div className='flex'>
                            <div className='flex items-center justify-center w-[50px] border rounded-13 border-blue text-blue text-[14px] font-bold'>
                              <span>구독+</span>
                            </div>
                          </div>
                        </div>
                        <div className='w-[213px] h-[42px] mt-[5px]'>
                          <span className='text-[15px]'>{newsstandMedia.text}</span>
                        </div>
                        <div className='w-[213px] h-[14px] mt-[7px] text-[14px] text-gray-500'>
                          <span>{newsstandMedia.date}</span>
                        </div>
                      </div>
                    </li>
                  )
                  }
                </ul>
              </div>
              <div id='newsstand_leftmedia' className='flex w-[385px] h-[224px]'>
                <ul className='flex flex-col justify-between'>
                  {newsstandMedias.map((newsstandMedia, index) =>
                    <li key={index} className='flex w-full' >
                      <div className='w-[156px] h-[104px] border rounded-lg mr-[16px]'>
                        <img src={newsstandMedia.image} className='w-full h-full object-cover' />
                      </div>
                      <div className='flex flex-col'>
                        <div className='flex w-[213px] justify-between mt-[3px]'>
                          <div className='flex'>
                            <div className='flex w-[22px] h-[22px] rounded-full border items-center justify-center mr-[6px]'>..</div>
                            <div className='flex text-[16px] font-bold'>{newsstandMedia.agency}</div>
                          </div>
                          <div className='flex'>
                            <div className='flex items-center justify-center w-[50px] border rounded-13 border-blue text-blue text-[14px] font-bold'>
                              <span>구독+</span>
                            </div>
                          </div>
                        </div>
                        <div className='w-[213px] h-[42px] mt-[5px]'>
                          <span>{newsstandMedia.text}</span>
                        </div>
                        <div className='w-[213px] h-[14px] mt-[7px] text-[14px] text-gray-500'>
                          <span>{newsstandMedia.date}</span>
                        </div>
                      </div>
                    </li>
                  )
                  }
                </ul>
              </div>
            </div>

            <div id='newsstand_paging' className='flex h-[58px] items-center justify-center py-[10px] border-t'>
              <div className="flex w-[34px] h-[34px] rounded-full border items-center justify-center font-bold pb-[1px]">
                &lt;
              </div>
              <div className='flex px-4 text-[14px] font-bold'>
                <span className='text-blue'>언론사</span>
                <span>더보기 19/</span>
                <span className='text-gray-300'>21</span></div>
              <div className="flex w-[34px] h-[34px] rounded-full border items-center justify-center font-bold pb-[1px]">
                &gt;
              </div>
            </div>
          </div>

          <div id='shopping_area' className='w-[831px] h-[560px] border rounded-lg mt-4'>
            <div id='newsstand_header' className='flex h-[58px] items-center px-[20px]'>
              <ul className='flex'>
                {shoppingTexts.map((shoppingText, index) =>
                  <li key={index}>
                    <span className={`text-[17px] font-bold ${index === 2 ? 'text-black' : 'text-gray-400'}`}>
                      {shoppingText}
                    </span>
                    {index < shoppingTexts.length - 1 &&
                      <span className='text-gray-400'>&nbsp;/&nbsp;</span>
                    }
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div id='feed' className='w-[830px] h-[830px] border-2 mt-4'>feed</div>
          <div id='linebottombanner_area' className='w-[830px] h-[60px] border-2 rounded-lg mt-4'>linebottombanner_area</div>
        </div>
        <div id='right-container' className='mx-auto px-[30px] pb-[60px]'>
          <div id='account_area' className='w-[420px] h-[164px] border-2 rounded-lg'>account_area</div>
          <div id='rightadd_area' className='w-[420px] h-[240px] border-2 rounded-lg mt-4'>rightadd_area</div>
          <div id='banneradd_area' className='w-[420px] h-[80px] border-2 rounded-lg mt-4'>banneradd_area</div>
          <div id='shopping_area' className='w-[420px] h-[172px] border-2 rounded-lg mt-4'>shopping_area</div>
          <div id='weather_area' className='w-[420px] h-[236px] border-2 rounded-lg mt-4'>weather_area</div>
          <div id='stockmarket_area' className='w-[420px] h-[236px] border-2 rounded-lg mt-4'>stockmarket_area</div>
          <div id='rightadd2_area' className='w-[420px] h-[240px] border-2 rounded-lg mt-4'>rightadd2_area</div>
          <div id='widget_area' className='w-[420px] h-[516px] border-2 rounded-lg my-4'>widget_area</div>
          <div id='banneradd2_area' className='w-[420px] h-[80px] border-2 rounded-lg'>banneradd2_area</div>
        </div>

      </div>
      {/* footer */}
      <div id='footer' className='flex flex-col pb-[78px]'>
        <div id='nbanner_area' className='flex justify-between h-[161px] border-b-2 py-[30px]'>
          <div id='da_public_left'>1</div>
          <div id='da_public_right'>2</div>
          <div id='beta_time2'>3</div>
        </div>
        <div id='notice_area' className='flex justify-between h-[60px] border-b-2 py-[21px]'>
          <div>공지사항</div>
          <div>서비스 전체보기</div>
        </div>
        <div id='aside_area' className='flex flex-col h-[91px] border-b-2 py-[20px]'>
          <div id='partner_box_wrap'>Partners</div>
          <div id='service_box_wrap'>Developers</div>
        </div>
        <div id='corp_area' className='flex h-[40px] pt-[20px]'>corp_area</div>

      </div>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* <img src={naver_logo} className="logo react" alt="React logo" /> */}

      <div>

      </div>
    </div >
  )
}

export default App
