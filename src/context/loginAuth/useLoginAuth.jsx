import { useContext } from 'react';
import { LoginAuthContext } from './LoginAuthContext';

export function useLoginAuth() {
  const context = useContext(LoginAuthContext);
  if (context === undefined)
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
