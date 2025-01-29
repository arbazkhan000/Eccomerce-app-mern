import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "../AdminSidebar";

const AdminLayout = ({ children }) => {
    return (
        <SidebarProvider>
            <AdminSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
};

export default AdminLayout;
