import { Breadcrumb, PageHeading } from 'components/common/PageHeading'
import React from 'react'
import style from './Page.module.scss'
import { Button } from 'components/UI'
import { updateUser } from 'features/usersSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Section, SectionItem } from './components'
import { useParams } from 'react-router-dom'
import { Customer } from 'constants/types'


function Page() {
    const dispatch = useAppDispatch()
    const users = useAppSelector(s => s.users.data)
    const { id: userId } = useParams()
    const user: Customer = users.find(e => e.id === userId)
    
    const blacklistUser = () => {
        dispatch(updateUser([user.id, { ...user, isBlacklisted: !user?.isBlacklisted }] ))
    } 
    const toggleActivateUser = () => {
        dispatch(updateUser([user.id, { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }] ))
    } 

    return (
        <div className={style.container}>
            <Breadcrumb text='Back To Users' to='/users'/>
            <PageHeading title='User Details'>
                <Button
                    onClick={blacklistUser}
                    variant='outline'
                    className={`${style.btn} ${style.red}`}
                >
                    {`${user?.isBlacklisted ? 'Remove from Blacklist' : 'Blacklist'}`}
                </Button>
                <Button 
                    onClick={toggleActivateUser}
                    variant='outline' 
                    className={`${style.btn} ${style.coral}`}
                >
                    {`${user?.status === 'Active' ? 'Deactivate' : 'Activate'} User`}
                </Button>
            </PageHeading>
            <div className={style.detailBody}>
                <Section title='Personal Information'>
                    <SectionItem title='Full Name' content={`${user?.profile?.firstName} ${user?.profile?.lastName}`} />
                    <SectionItem title='Phone Number' content={user?.phoneNumber} />
                    <SectionItem title='Email Address' content={user?.email} />
                    <SectionItem title='BVN' content={user?.profile?.bvn} />
                    <SectionItem title='Gender' content={user?.profile?.gender} />
                    <SectionItem title='Marital Status' content={user?.maritalStatus ?? 'Single'} />
                    <SectionItem title='Children' content={user?.noOfChildren ?? '0'} />
                    <SectionItem title='Type of Residence' content={user?.residence ?? ''} />
                </Section>
                <Section title='Education and Employment'>
                    <SectionItem title='Level of Education' content={user?.education?.level} width='25%'/>
                    <SectionItem title='Employment Status' content={user?.education?.employmentStatus} width='25%' />
                    <SectionItem title='Sector of Employment' content={user?.education?.sector} width='25%' />
                    <SectionItem title='Duration of Employment' content={user?.education?.duration} width='25%' />
                    <SectionItem title='Office Email' content={user?.education?.officeEmail} width='25%' />
                    <SectionItem title='Monthly Income' content={user?.education?.monthlyIncome} width='25%' />
                    <SectionItem title='Loan Repayment' content={user?.education?.loanRepayment} width='25%' />
                </Section>
                <Section title='Socials'>
                    <SectionItem title='Twitter' content={user?.socials?.twitter}/>
                    <SectionItem title='Facebook' content={user?.socials?.facebook}/>
                    <SectionItem title='Instagram' content={user?.socials?.instagram}/>
                </Section>
                <Section title='Guarantor'>
                    <SectionItem title='Full Name' content={`${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`}/>
                    <SectionItem title='Phone Number' content={user?.guarantor?.phoneNumber}/>
                    <SectionItem title='Email Address' content={user?.guarantor?.email}/>
                    <SectionItem title='Relationship' content={user?.guarantor?.relationship}/>
                </Section>
                <Section title=''>
                    <SectionItem title='Full Name' content={user?.socials?.twitter}/>
                    <SectionItem title='Phone Number' content={user?.socials?.facebook}/>
                    <SectionItem title='Email Address' content={user?.socials?.instagram}/>
                    <SectionItem title='Relationship' content={user?.guarantor?.relationship ?? 'Single'}/>
                </Section>
            </div>
        </div>
    )
}

export default Page