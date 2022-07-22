import {
    createRouter,
    createWebHistory
} from "vue-router"

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'LOGIN',
        component: () => import('@/components/Login/UserLogin')
    },
    {
        path: '/test',
        name: 'TEST',
        component: () => import('@/components/Test/TestIndex'),
        redirect: '/test/home',
        children: [
            {
                path: '/test/home',
                component: () => import('@/components/Test/Content/TestHome')
            },
            {
                path: '/test/task',
                component: () => import('@/components/Test/Content/PsychologyTest/TestTask')
            },
            {
                path: '/test/record',
                component: () => import('@/components/Test/Content/PsychologyTest/TestRecord')
            },
            {
                path: '/test/startTest',
                component: () => import('@/components/Test/Content/PsychologyTest/StartTest')
            }
        ]
    }, {
        path: '/admin',
        name: 'ADMIN',
        component: () => import('@/components/Administrator/AdminIndex'),
        redirect: '/admin/home',
        children: [{
            path: '/admin/home',
            component: () => import('@/components/Administrator/Content/AdminHome')
        }, {
            path: '/admin/Inform/SMInform',
            component: () => import('@/components/Administrator/Content/InformMessage/SMessageInform')
        }, {
            path: '/admin/Manage/TeacherUserList',
            component: () => import('@/components/Administrator/Content/Manage/TeacherUserList')
        }, {
            path: '/admin/Manage/SchoolList',
            component: () => import('@/components/Administrator/Content/Manage/SchoolList')
        }, {
            path: '/admin/Manage/StudentUserList',
            component: () => import('@/components/Administrator/Content/Manage/StudentUserList')
        }, {
            path: '/admin/PsychologyTest/TestTask',
            component: () => import('@/components/Administrator/Content/PsychologyTest/TestTask')
        }, {
            path: '/admin/PsychologyTest/TestRecord',
            component: () => import('@/components/Administrator/Content/PsychologyTest/TestRecord')
        }, {
            path: '/admin/PsychologyTest/startTest',
            component: () => import('@/components/Test/Content/PsychologyTest/StartTest')
        }, {
            path: '/admin/ScaleManage/ScaleRecord',
            component: () => import('@/components/Administrator/Content/ScaleManage/ScaleRecord')
        }, {
            path: '/admin/ScaleManage/RedAlarm',
            component: () => import('@/components/Administrator/Content/ScaleManage/RedAlarm')
        }, {
            path: '/admin/ScaleManage/YellowAlarm',
            component: () => import('@/components/Administrator/Content/ScaleManage/YellowAlarm')
        }, {
            path: '/admin/ScaleManage/StudentTaskManage',
            component: () => import('@/components/Administrator/Content/ScaleManage/StudentTaskManage')
        }, {
            path: '/admin/ScaleManage/TeacherTaskManage',
            component: () => import('@/components/Administrator/Content/ScaleManage/TeacherTaskManage')
        }, {
            path: '/admin/UserRightManage/UserList',
            component: () => import('@/components/Administrator/Content/UserRightManage/UserList')
        }, {
            path: '/admin/UserRightManage/LogList',
            component: () => import('@/components/Administrator/Content/UserRightManage/LogList')
        }, {
            path: '/admin/UserRightManage/RoleList',
            component: () => import('@/components/Administrator/Content/UserRightManage/RoleList')
        }, {
            path: '/admin/UserRightManage/ResourceGroupList',
            component: () => import('@/components/Administrator/Content/UserRightManage/ResourceGroupList')
        }, {
            path: '/admin/UserRightManage/ResourceList',
            component: () => import('@/components/Administrator/Content/UserRightManage/ResourceList')
        }, {
            path: '/admin/UserRightManage/RightSet',
            component: () => import('@/components/Administrator/Content/UserRightManage/RightSet')
        }, {
            path: '/admin/SystemManage/RestrictManage',
            component: () => import('@/components/Administrator/Content/SystemManage/RestrictManage')
        }, {
            path: '/admin/SystemManage/WebSet',
            component: () => import('@/components/Administrator/Content/SystemManage/WebSet')
        }, {
            path: '/admin/SystemManage/LinkList',
            component: () => import('@/components/Administrator/Content/SystemManage/LinkList')
        }, {
            path: '/admin/UserManage/ComplaintList',
            component: () => import('@/components/Administrator/Content/UserManage/ComplaintList')
        }, {
            path: '/admin/UserManage/UserManage',
            component: () => import('@/components/Administrator/Content/UserManage/UserManage')
        }]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router