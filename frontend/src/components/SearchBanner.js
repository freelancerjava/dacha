import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import LocationSvg from '../images/svg/LocationSvg';
import { useStaticQuery, navigate, graphql } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
import PageHeading from './styled/page-heading';
import ProductList from './product-list';

import { useOnClickOutside, useOnKeypress } from "~/helpers/hooks"

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const onFinish = (values) => {
    console.log('Success:', values);
    navigate(
        "/search",
        {
            state: { values }
        }
    )
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const SearchBanner = ({ categories }) => {

    const data = useStaticQuery(graphql`
        query MyLocalSearchQuery {
            localSearchPages {
                index
                store
            }
        }
    `)

    const {
        localSearchPages: { index, store },
    } = data
    const [searchQuery, setSearchQuery] = useState("")
    const results = useFlexSearch(searchQuery, index, store)

    const [openModal, setOpenModal] = useState(false);

    const modal = useRef()
    const input = useRef()
    useOnClickOutside(modal, () => setOpenModal(false))
    useOnKeypress(() => setOpenModal(false))

    const hasNoResults = searchQuery.length > 0 && results.length === 0

    return (
        <div className='search-banner'>
            <h1>Найдите место для вашего отдыха</h1>

            <Form
                // {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {/* <Form.Item>
                    <Input
                        allowClear
                        ref={input}
                        onClick={() => setOpenModal(true)}
                        value={searchQuery}
                        onChange={e => {
                            setSearchQuery(e.target.value)
                            setOpenModal(true)
                        }}
                        placeholder="Местоположение" suffix={<LocationSvg />} />
                </Form.Item> */}

                <Form.Item>
                    <Select
                        placeholder="Местоположение"
                        allowClear
                    >
                        {
                            categories.map(({ node }) => {
                                return (
                                    <Option value={node.slug}>{node.name}</Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Select
                        placeholder="Все категории"
                        allowClear
                    >
                        {
                            categories.map(({ node }) => {
                                return (
                                    <Option value={node.slug}>{node.name}</Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Найти
                    </Button>
                </Form.Item>
            </Form>

            {openModal &&
                <div ref={modal} className='search-results'>
                    {results.length > 0 && (
                        <div>
                            <PageHeading>Izlash natijalari</PageHeading>
                            <ProductList products={results} />
                        </div>
                    )}
                    {hasNoResults && (
                        <p className="italic text-sm font-light mt-2">
                            Izlangan ma'lumotlar topilmadi!
                        </p>
                    )}
                </div>
            }
        </div>
    );
};


export default SearchBanner;