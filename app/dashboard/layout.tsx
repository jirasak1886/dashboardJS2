import Link from 'next/link';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{
    backgroundColor: '#ffffff',
    backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    paddingTop: '20px',
    paddingBottom: '20px',
}}>
            <div style={{
                display: 'flex',
                maxWidth: '1200px',
                minHeight: '80vh',
                margin: '0 auto',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 0 15px rgba(38, 10, 137, 0.6)',
                border: '1px solid #333'
            }}>
                {/* Sidebar */}
                <aside style={{
                    width: '220px',
                    backgroundColor: '#0000FF',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    borderRight: '1px solid #333'
                }}>
                    <h2 style={{ margin: 0, color: '#ffffff' }}>🧭 Dashboard</h2>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                        <Link href="/dashboard" style={{
                            textDecoration: 'none',
                            color: '#ffffff',
                            fontWeight: 'bold'
                        }}>🏠 Overview</Link>
                        <Link href="/dashboard/settings" style={{
                            textDecoration: 'none',
                            color: '#ffffff',
                            fontWeight: 'bold'
                        }}>⚙️ Settings</Link>
                        <Link href="/dashboard/profile" style={{
                            textDecoration: 'none',
                            color: '#ffffff',
                            fontWeight: 'bold'
                        }}>👤 Profile</Link>
                    </nav>
                </aside>

                {/* Content */}
                <div style={{
                    flex: 1,
                    padding: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <main style={{ flexGrow: 1 }}>
                        {children}
                    </main>
                    <footer style={{
                        borderTop: '1px solid #333',
                        paddingTop: '10px',
                        color: '#bbb',
                        fontSize: '14px',
                        textAlign: 'center',
                        marginTop: '30px'
                    }}>
                        <p>Dashboard specific footer</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
