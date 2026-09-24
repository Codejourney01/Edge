import { useState } from 'react'
import Gradientbutton from './ui/Gradientbutton'
import Title from './ui/Title'
import { FiCheck } from "react-icons/fi";
import Mobilegrid from './Mobilegrid';
import { CiCircleCheck, CiCirclePlus } from "react-icons/ci";

export default function HeroSection() {

  const menuItems = [
    'Projects',
    'Tasks',
    'Team Management',
    'AI Predictions',
    'Analytics',
    'Reports',
    'Dashboards',
    'Notifications',
    'Role & Permissions',
    'System Monitoring',
  ];

  const imageMap = {
    'Projects': '/project.svg',
    'Tasks': '/tasks.svg',
    'Team Management': '/team-management.svg',
    'AI Predictions': '/ai-predictions.svg',
    'Analytics': '/analytics.svg',
    'Reports': '/reports.svg',
    'Dashboards': '/dashboards.svg',
    'Notifications': '/notifications.svg',
    'Role & Permissions': '/role-permissions.svg',
    'System Monitoring': '/system-monitoring.svg',
  };

  const [activeItem, setActiveItem] = useState('Projects');
  const [activeItems, setActiveItems] = useState(['Projects']);
  const [fade, setFade] = useState(true);

  const handleItemClick = (item) => {

    if (item === 'Projects') return;

    if (activeItems.includes(item)) {

      const updatedItems = activeItems.filter(
        (active) => active !== item
      );

      const previousItem =
        updatedItems.length > 0
          ? updatedItems[updatedItems.length - 1]
          : 'Projects';

      setFade(false);

      setTimeout(() => {
        setActiveItems(updatedItems);
        setActiveItem(previousItem);
        setFade(true);
      }, 200);

      return;
    }

    setFade(false);

    setTimeout(() => {
      setActiveItems((prev) => [...prev, item]);
      setActiveItem(item);
      setFade(true);
    }, 200);
  };

  return (
    <>
      <div className='w-full px-7 pt-9 md:pt-12 md:px-25'>

        <Gradientbutton />

        <div className='pt-5'>
          <Title />
        </div>

        <div className='md:hidden pt-7 flex flex-col gap-4'>

          <div className='flex items-start gap-3'>
            <FiCheck
              size={20}
              strokeWidth={3}
              className='text-[#2563EB] font-semibold mt-1'
            />
            <div className='text-[14px]'>
              <span className='font-semibold text-[#202020]'>
                Save money.
              </span>
              <span className='text-[#646464] pl-1'>
                All Features, Ai Projects, Analysis +20 more.
              </span>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <FiCheck
              size={20}
              strokeWidth={3}
              className='text-[#2563EB] font-semibold mt-1'
            />
            <div className='text-[14px]'>
              <span className='font-semibold text-[#202020]'>
                Save time.
              </span>
              <span className='text-[#646464] pl-1'>
                All humans working together with perfect context
              </span>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <FiCheck
              size={20}
              strokeWidth={3}
              className='text-[#2563EB] font-semibold mt-1'
            />
            <div className='text-[14px]'>
              <span className='font-semibold text-[#202020]'>
                Create infinite productivity.
              </span>
              <span className='text-[#646464] pl-1'>
                Ai model & Workflows
              </span>
            </div>
          </div>

        </div>

        <div className='herobutton flex pt-9 md:pt-8 items-center gap-4'>

          <button className='w-[60%] h-12 md:w-53.5 md:h-11.75 md:flex text-[14px] items-center justify-center font-medium text-white md:text-base bg-[#202020] rounded-[11px]'>
            Get started. It s FREE !
          </button>

          <div className='flex flex-col'>
            <span className='text-[#646464] text-[12px]'>
              Free forever
            </span>
            <span className='text-[#646464] text-[12px]'>
              No credit card
            </span>
          </div>

        </div>

      </div>

      <div className='sm:hidden w-full mt-10 mb-10'>

        <Mobilegrid />

        <div className='w-full flex items-center justify-center mt-6'>
          <button className='w-[90%] h-12 text-[14px] flex items-center justify-center font-medium text-white bg-[#202020] rounded-[11px]'>
            Get started. It s FREE !
          </button>
        </div>

      </div>

      <div className='hidden sm:flex w-full mt-12 h-[480px] md:h-[400px] lg:h-120'>

        <div className='w-[5%] md:w-[8%] lg:w-[12%] border border-[#E5E5E5] h-full'>
        </div>

        <div className='w-[28%] md:w-[25%] lg:w-[17%] border border-[#e5e5e5] border-l-0 h-full px-3 sm:px-4 md:px-5 py-5 md:py-6'>

          <div className='flex flex-col justify-center gap-4 md:gap-5 text-[11px] sm:text-[12px] md:text-[13px]'>

            {menuItems.map((item, index) => {

              const isActive = activeItems.includes(item);

              return (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center gap-1.5 md:gap-2 whitespace-nowrap leading-none text-left transition-colors duration-200 ${
                    isActive
                      ? 'text-[#2563EB] font-medium'
                      : 'text-[#525252]'
                  }`}
                >

                  {isActive ? (
                    <CiCircleCheck
                      size={16}
                      strokeWidth={2}
                      className='shrink-0 md:w-[17px] md:h-[17px]'
                    />
                  ) : (
                    <CiCirclePlus
                      size={16}
                      strokeWidth={2}
                      className='shrink-0 md:w-[17px] md:h-[17px]'
                    />
                  )}

                  <span>{item}</span>

                </button>
              );
            })}

          </div>

        </div>

        <div className='w-[62%] md:w-[62%] lg:w-[59%] border border-[#e5e5e5] border-l-0 h-full overflow-hidden flex items-center justify-center bg-white'>

          <img
            key={activeItem}
            src={imageMap[activeItem] || imageMap['Projects']}
            alt={activeItem}
            className={`w-full h-full object-contain lg:object-cover object-top transition-all duration-300 ease-in-out ${
              fade
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-[0.98]'
            }`}
          />

        </div>

        <div className='w-[5%] md:w-[5%] lg:w-[12%] border border-[#e5e5e5] border-l-0 h-full'>
        </div>

      </div>

      <div className='hidden sm:flex w-full h-16 md:h-20'>

        <div className='w-[5%] md:w-[8%] lg:w-[12%] border border-[#E5E5E5] h-full border-t-0'>
        </div>

        <div className='w-[28%] md:w-[25%] lg:w-[17%] border border-[#e5e5e5] border-l-0 border-t-0 h-full'>
        </div>

        <div className='w-[62%] md:w-[62%] lg:w-[59%] border border-[#e5e5e5] border-l-0 border-t-0 h-full'>
        </div>

        <div className='w-[5%] md:w-[5%] lg:w-[12%] border border-[#e5e5e5] border-l-0 border-t-0 h-full'>
        </div>

      </div>
    </>
  )
}