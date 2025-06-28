import React, { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '../services/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetchProfile()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchProfile = async () => {
    try {
      const response = await authAPI.getProfile()
      setUser(response.data)
      setIsAuthenticated(true)
    } catch (error) {
      localStorage.removeItem('token')
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    const response = await authAPI.login(email, password)
    localStorage.setItem('token', response.data.token)
    await fetchProfile()
    return response
  }

  const register = async (email, password) => {
    return await authAPI.register(email, password)
  }

  const verifyOTP = async (email, otp) => {
    return await authAPI.verifyOTP(email, otp)
  }

  const resendOTP = async (email) => {
    return await authAPI.resendOTP(email)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(false)
  }

  const changePassword = async (currentPassword, newPassword) => {
    return await authAPI.changePassword(currentPassword, newPassword)
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    verifyOTP,
    resendOTP,
    logout,
    changePassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}