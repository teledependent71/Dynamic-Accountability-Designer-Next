import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Dynamic Accountability Designer</title>
          <meta
            property="og:title"
            content="test-page - Dynamic Accountability Designer"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_s33lv) => (
            <>
              <h1>{context_s33lv?.name}</h1>
            </>
          )}
          initialData={props.contextS33lvProp}
          persistDataDuringLoading={true}
          key={props?.contextS33lvProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextS33lvProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextS33lvProp: contextS33lvProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
