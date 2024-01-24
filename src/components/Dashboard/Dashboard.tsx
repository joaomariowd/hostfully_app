import { ReactNode } from 'react';
import { Header } from '..';

type DashboardProps = {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-tl from-secondary-light via-white to-paper">
      <Header />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default Dashboard