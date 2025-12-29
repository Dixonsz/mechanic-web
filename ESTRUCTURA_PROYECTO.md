# 📁 Guía de Estructura del Proyecto - Mechanic Web

Esta guía explica la función de cada carpeta y el flujo de trabajo recomendado para mantener el proyecto organizado.

---

## 🏗️ Estructura de Carpetas

### 📂 `src/types/`
**Función:** Definiciones de TypeScript (interfaces, types, enums)

**Qué va aquí:**
- Interfaces de entidades (`User.ts`, `Mechanic.ts`, `Order.ts`)
- Types compartidos
- Enums y constantes tipadas

**Cuándo trabajar aquí:** 
✅ **PRIMERO** - Define tus tipos antes de crear cualquier lógica

**Ejemplo:**
```typescript
// types/User.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'mechanic' | 'admin';
}
```

---

### 📂 `src/api/`
**Función:** Capa de comunicación con el backend (llamadas HTTP)

**Qué va aquí:**
- `axiosClient.ts` - Configuración base de Axios (base URL, interceptors, headers)
- `authApi.ts`, `ordersApi.ts`, etc. - Funciones específicas que hacen peticiones HTTP

**Cuándo trabajar aquí:**
✅ **SEGUNDO** - Después de definir types, crea tus endpoints

**Ejemplo:**
```typescript
// api/authApi.ts
import axiosClient from './axiosClient';
import { User } from '../types/User';

export const login = (email: string, password: string) => 
  axiosClient.post<User>('/auth/login', { email, password });
```

**Regla importante:** Esta capa NO tiene lógica de negocio, solo hace peticiones HTTP puras.

---

### 📂 `src/services/`
**Función:** Lógica de negocio del frontend

**Qué va aquí:**
- Funciones que coordinan múltiples llamadas API
- Transformación de datos
- Validaciones complejas
- Lógica de negocio que no pertenece a componentes

**Cuándo trabajar aquí:**
✅ **TERCERO** - Después de tener la API lista, agrega lógica de negocio

**Ejemplo:**
```typescript
// services/authService.ts
import { login } from '../api/authApi';
import { saveToken } from '../utils/storage';

export const loginUser = async (email: string, password: string) => {
  const response = await login(email, password);
  saveToken(response.data.token);
  return response.data.user;
};
```

**Diferencia con api/:**
- `api/` → Llamadas HTTP puras
- `services/` → Lógica de negocio + coordina múltiples APIs

---

### 📂 `src/utils/`
**Función:** Funciones auxiliares/helpers reutilizables

**Qué va aquí:**
- Funciones de formateo (fechas, monedas, textos)
- Validadores
- Storage helpers (localStorage, sessionStorage)
- Utilidades generales sin dependencias de la aplicación

**Ejemplo:**
```typescript
// utils/storage.ts
export const saveToken = (token: string) => 
  localStorage.setItem('token', token);

export const getToken = () => 
  localStorage.getItem('token');
```

---

### 📂 `src/context/`
**Función:** Estado global de la aplicación (Context API)

**Qué va aquí:**
- Contextos de autenticación
- Estado global de temas
- Configuración de la aplicación

**Cuándo trabajar aquí:**
✅ **CUARTO** - Cuando necesites compartir estado entre componentes distantes

**Ejemplo:**
```typescript
// context/AuthContext.tsx
import { createContext, useState } from 'react';
import { User } from '../types/User';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  // ... lógica
};
```

---

### 📂 `src/hooks/`
**Función:** Custom hooks reutilizables

**Qué va aquí:**
- Hooks que encapsulan lógica reutilizable
- Hooks que usan otros hooks (useState, useEffect, useContext)

**Cuándo trabajar aquí:**
✅ Cuando necesites reutilizar lógica stateful en múltiples componentes

**Ejemplo:**
```typescript
// hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
```

---

### 📂 `src/components/`
**Función:** Componentes React reutilizables (UI)

**Qué va aquí:**
- Componentes pequeños y reutilizables (Button, Card, Input, Modal)
- Componentes sin lógica de negocio compleja
- Elementos de UI compartidos

**Estructura recomendada:**
```
components/
├── ui/              ← Componentes básicos (Button, Input)
├── layout/          ← Layout components (Navbar, Footer, Sidebar)
└── common/          ← Componentes comunes específicos del dominio
```

**Ejemplo:**
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  return <button onClick={onClick} className={variant}>{label}</button>;
};
```

---

### 📂 `src/pages/`
**Función:** Vistas/Pantallas de la aplicación (rutas principales)

**Qué va aquí:**
- Componentes que representan páginas completas
- Coordinan múltiples componentes
- Contienen lógica específica de la vista

**Cuándo trabajar aquí:**
✅ **QUINTO** - Después de tener componentes, services y context listos

**Ejemplo:**
```typescript
// pages/LoginPage.tsx
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';

export const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  // ... lógica de la página
};
```

**Naming convention:** Siempre termina en `Page.tsx`

---

### 📂 `src/routes/`
**Función:** Configuración de rutas de la aplicación

**Qué va aquí:**
- Definición de rutas
- Rutas protegidas
- Lazy loading de páginas

**Ejemplo:**
```typescript
// routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
```

---

## 🔄 Flujo de Trabajo Recomendado

### 1️⃣ **Planificación**
- Define las entidades y modelos de datos
- Identifica las vistas principales
- Diseña el flujo de navegación

### 2️⃣ **Orden de Desarrollo**

```
1. types/         → Define interfaces y tipos
2. api/           → Configura cliente HTTP y endpoints
3. utils/         → Crea helpers necesarios
4. services/      → Implementa lógica de negocio
5. context/       → Configura estado global si es necesario
6. hooks/         → Crea custom hooks
7. components/    → Construye componentes reutilizables
8. pages/         → Ensambla las páginas
9. routes/        → Configura navegación
```

### 3️⃣ **Ejemplo de Flujo para una Feature Nueva (Sistema de Órdenes)**

```
✅ 1. Crear types/Order.ts
       └─ Define interface Order

✅ 2. Crear api/ordersApi.ts
       └─ Funciones: getOrders(), createOrder()

✅ 3. Crear services/orderService.ts
       └─ Lógica: validar orden, calcular total, etc.

✅ 4. Crear components/OrderCard.tsx
       └─ Componente reutilizable para mostrar una orden

✅ 5. Crear pages/OrdersPage.tsx
       └─ Vista que usa OrderCard y orderService

✅ 6. Agregar ruta en routes/AppRoutes.tsx
       └─ /orders → OrdersPage
```

---

## 📋 Reglas y Buenas Prácticas

### ✅ DO (Hacer)

1. **Separación de responsabilidades:** Cada carpeta tiene un propósito único
2. **DRY (Don't Repeat Yourself):** Si usas algo 2+ veces, muévelo a `components/` o `utils/`
3. **Tipado fuerte:** Siempre define tipos en `types/` primero
4. **Naming conventions:**
   - Pages: `LoginPage.tsx`, `DashboardPage.tsx`
   - Components: `Button.tsx`, `OrderCard.tsx` (PascalCase)
   - Hooks: `useAuth.ts`, `useFetch.ts` (camelCase con prefijo "use")
   - Utils: `storage.ts`, `formatDate.ts` (camelCase)

### ❌ DON'T (Evitar)

1. **No mezcles responsabilidades:** No pongas llamadas API directamente en pages
2. **No dupliques código:** Crea componentes/utils reutilizables
3. **No hardcodees tipos:** Siempre usa las interfaces de `types/`
4. **No pongas lógica de negocio en componentes:** Usa `services/`

---

## 🎯 Checklist para Nuevas Features

Cuando implementes una nueva funcionalidad, sigue este checklist:

- [ ] ¿Definí los tipos en `types/`?
- [ ] ¿Creé los endpoints necesarios en `api/`?
- [ ] ¿Implementé la lógica de negocio en `services/`?
- [ ] ¿Necesito estado global? → Usa `context/`
- [ ] ¿Puedo reutilizar esta lógica? → Crea un hook en `hooks/`
- [ ] ¿Los componentes son reutilizables? → Van en `components/`
- [ ] ¿Es una vista completa? → Va en `pages/`
- [ ] ¿Agregué la ruta en `routes/`?

---

## 🔧 Herramientas de Apoyo

### Comandos útiles:
```bash
# Instalar dependencias nuevas
npm install [package-name]

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Linter
npm run lint
```

---

## 📚 Recursos Adicionales

- **React Docs:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Axios:** https://axios-http.com/docs/intro
- **React Router:** https://reactrouter.com

---

**Última actualización:** Diciembre 2025
