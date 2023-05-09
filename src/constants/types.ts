
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    address?: string;
    phone?: string;
    position?: string;
    profilePicture?: string;
}

export interface AltCustomer {
    id: number;
    firstName?: string;
    lastName?: string;
    fullName: string;
    email: string;
    address?: string;
    phone?: string;
    position?: string;
    profilePicture?: string;
    organization?: string;
    bvn?: string;
    gender?: string;
    maritalStatus?: string;
    noOfChildren?: number | string;
    residence?: number;
    education?: number;
    employmentStatus?: number;
    sector?: number;
    employmentDuration?: number | string;
    officeEmail?: number;
    income?: number | string;
    loanRepayment?: number | string | boolean;
    twitter?: number;
    facebook?: number;
    instagram?: number;
    relationship?: string;
    status?: string;
    isBlacklisted?: boolean;
    guarantor?: Customer
}

export interface NavItem {
    name: string;
    to?: string;
    icon?: string;
    isGroup?: boolean;
    index?: number;
    subItems?: {
        name: string;
        to: string;
        icon: string;
    }[];
}

export interface Customer {
    id: string;
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: {
        firstName: string;
        lastName: string;
        phoneNumber: string | number;
        avatar: string;
        gender: string;
        bvn: string;
        address: string;
        currency: string;
    },
    guarantor: {
        firstName: string;
        lastName: string;
        phoneNumber: string | number;
        gender: string;
        address: string;
        //additional types
        email?: string;
        relationship?: string;
    },
    accountBalance: number;
    accountNumber: string;
    socials: {
        facebook: string;
        instagram: string;
        twitter: string;
    },
    education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: number; ///!!something wrong
        loanRepayment: number;
    },
    //additional types
    status?: string;
    isBlacklisted?: string;
    maritalStatus?: string;
    noOfChildren?: string;
    residence?: string;
} 