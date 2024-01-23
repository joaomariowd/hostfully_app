import { ReactNode } from 'react';
import { Header } from '..';

type DashboardProps = {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 p-4 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default Dashboard