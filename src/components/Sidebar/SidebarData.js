import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import * as VscIcons from 'react-icons/vsc'

export const SidebarData = [
    // {
    //     title: 'Master',
    //     path: '/master',
    //     icon: <AiIcons.AiFillHome />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    //     subNav: [
    //         {
    //             title: 'Sub Menu 1',
    //             path: '/overview/users',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //         {
    //             title: 'Sub Menu 2',
    //             path: '/overview/revenue',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //     ]
    // },
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Inquiry',
        path: '/void-confirmation',
        icon: <BsIcons.BsQuestionCircleFill />
    },
    {
        title: 'Denied Requests',
        path: '/process-entry',
        icon: <VscIcons.VscRequestChanges />
    },
    {
        title: 'Reports',
        path: '/process-entry',
        icon: <VscIcons.VscGraph />
    },
    // {
    //     title: 'Add New',
    //     path: '/add-new',
    //     icon: <BsIcons.BsPlusCircle />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    //     subNav: [
    //         {
    //             title: 'Process Type',
    //             path: '/overview/reports',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //         {
    //             title: 'Step',
    //             path: '/overview/revenue',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //         {
    //             title: 'Status',
    //             path: '/overview/revenue',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //         {
    //             title: 'Department',
    //             path: '/overview/revenue',
    //             icon: <IoIcons.IoIosPaper />
    //         },

    //     ]
    // },
]