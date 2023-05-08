import { NavItem } from "./types"
import DashboardIcon from 'assets/icons/dashboard.svg'
import UsersIcon from 'assets/icons/users.svg'
import GuarantorsIcon from 'assets/icons/guarantors.svg'
import LoansIcon from 'assets/icons/loans.svg'
import DecisionModelsIcon from 'assets/icons/decision-models.svg'
import SavingsIcon from 'assets/icons/savings.svg'
import LoanRequestsIcon from 'assets/icons/loan-requests.svg'
import WhitelistIcon from 'assets/icons/whitelist.svg'
import KarmaIcon from 'assets/icons/karma.svg'
import OrganizationIcon from 'assets/icons/organization.svg'
import LoanProductsIcon from 'assets/icons/loan-products.svg'
import SavingsProductsIcon from 'assets/icons/savings-products.svg'
import FeesandChargesIcon from 'assets/icons/fees-and-charges.svg'
import TransactionsIcon from 'assets/icons/transactions.svg'
import ServicesIcon from 'assets/icons/services.svg'
import ServiceAccountIcon from 'assets/icons/service-account.svg'
import SettlementsIcon from 'assets/icons/settlements.svg'
import ReportsIcon from 'assets/icons/reports.svg'
import PreferencesIcon from 'assets/icons/preferences.svg'
import FeesandPricingIcon from 'assets/icons/fees-and-pricing.svg'
import AuditLogsIcon from 'assets/icons/audit-logs.svg'

const list: NavItem[] = [
    {
        isGroup: false,
        name: 'Dashboard',
        to: '/dashboard',
        icon: DashboardIcon,
    },
    {
        isGroup: true,
        name: 'Customers',
        subItems: [
            {
                name: 'Users',
                to: '/users',
                icon: UsersIcon,
            },
            {
                name: 'Guarantors',
                to: '/guarantors',
                icon: GuarantorsIcon,
            },
            {
                name: 'Loans',
                to: '/loans',
                icon: LoansIcon,
            },
            {
                name: 'Decision Models',
                to: '/decision-models',
                icon: DecisionModelsIcon,
            },
            {
                name: 'Savings',
                to: '/savings',
                icon: SavingsIcon,
            },
            {
                name: 'Loan Requests',
                to: '/loan-requests',
                icon: LoanRequestsIcon,
            },
            {
                name: 'Whitelist',
                to: '/whitelist',
                icon: WhitelistIcon,
            },
            {
                name: 'Karma',
                to: '/karma',
                icon: KarmaIcon,
            },
        ]
    },
    {
        isGroup: true,
        name: 'Businesses',
        subItems: [
            {
                name: 'Organization',
                to: '/organization',
                icon: OrganizationIcon,
            },
            {
                name: 'Loan Products',
                to: '/loan-products',
                icon: LoanProductsIcon,
            },
            {
                name: 'Savings Products',
                to: '/savings-products',
                icon: SavingsProductsIcon,
            },
            {
                name: 'Fees and Charges',
                to: '/fees-and-charges',
                icon: FeesandChargesIcon,
            },
            {
                name: 'Transactions',
                to: '/transactions',
                icon: TransactionsIcon,
            },
            {
                name: 'Services',
                to: '/services',
                icon: ServicesIcon,
            },
            {
                name: 'Service Account',
                to: '/service-account',
                icon: ServiceAccountIcon,
            },
            {
                name: 'Settlements',
                to: '/settlements',
                icon: SettlementsIcon,
            },
            {
                name: 'Reports',
                to: '/reports',
                icon: ReportsIcon,
            },
        ]
    },
    {
        isGroup: true,
        name: 'Settings',
        subItems: [
            {
                name: 'Preferences',
                to: '/preferences',
                icon: PreferencesIcon,
            },
            {
                name: 'Fees and Pricing',
                to: '/fees-and-pricing',
                icon: FeesandPricingIcon,
            },
            {
                name: 'Audit Logs',
                to: '/audit-logs',
                icon: AuditLogsIcon,
            },
        ]
    },
] 

export default list