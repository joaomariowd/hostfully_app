import { ReactNode } from 'react';
import { Header } from '..';

type DashboardProps = {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-tl from-amber-200 via-paper to-paper">
      <Header />
      <main className="flex-1 p-4 overflow-auto bg-yellow">
        {children}
      </main>
    </div>
  )
}

export default Dashboard