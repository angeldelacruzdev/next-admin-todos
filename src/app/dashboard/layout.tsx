// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12

import { Sidebar, TopMenu, WidgetItem } from '@/components';
import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from 'react-icons/ci';

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* TODO: src/components <Sidebar /> */}
            <Sidebar />
            {/*TODO: Fin del <Sidebar /> */}
            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
                <TopMenu />
                <div className="px-6 pt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}