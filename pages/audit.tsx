'use client';
import { AuditManagement } from '@descope/nextjs-sdk';

const Audit = () => (
    <AuditManagement tenant={process.env.DESCOPE_TENANT_ID || ''} widgetId="audit-management-widget"/>
);

export default Audit;