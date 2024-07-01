import React, { useEffect, useState } from "react";

type props = {
  ssr_value: string;
};

export const getServerSideProps = async (context: {params: {late: number}}) => {
  const late_ssr = Number(context.params?.late) || 0;
  await new Promise((resolve) => setTimeout(resolve, late_ssr * 1000)); 
  return { props: { ssr_value: "ssr_value" } };
};

const LateTest = ({ ssr_value }: props) => {
  const [csr0s, setCsr0s] = useState<null | string>(null);
  const [csr1s, setCsr1s] = useState<null | string>(null);
  const [csr2s, setCsr2s] = useState<null | string>(null);
  const [csr3s, setCsr3s] = useState<null | string>(null);
  const [csr4s, setCsr4s] = useState<null | string>(null);
  const [csr5s, setCsr5s] = useState<null | string>(null);
  const [csr6s, setCsr6s] = useState<null | string>(null);
  const [csr7s, setCsr7s] = useState<null | string>(null);
  const [csr8s, setCsr8s] = useState<null | string>(null);
  const [csr9s, setCsr9s] = useState<null | string>(null);

  useEffect(() => {
    setCsr0s("csr_0s_value");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr1s("csr_1s_value");
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr2s("csr_2s_value");
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr3s("csr_3s_value");
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr4s("csr_4s_value");
    }, 4000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr5s("csr_5s_value");
    }, 5000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr6s("csr_6s_value");
    }, 6000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr7s("csr_7s_value");
    }, 7000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr8s("csr_8s_value");
    }, 8000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCsr9s("csr_9s_value");
    }, 9000);
  }, []);

  return (
    <main>
      <h2>SSR</h2>
      <p>{ssr_value}</p>

      <h2>CSR</h2>
      <h3>0s</h3>
      {csr0s && <p>{csr0s}</p>}
      <h3>1s</h3>
      {csr1s && <p>{csr1s}</p>}
      <h3>2s</h3>
      {csr2s && <p>{csr2s}</p>}
      <h3>3s</h3>
      {csr3s && <p>{csr3s}</p>}
      <h3>4s</h3>
      {csr4s && <p>{csr4s}</p>}
      <h3>5s</h3>
      {csr5s && <p>{csr5s}</p>}
      <h3>6s</h3>
      {csr6s && <p>{csr6s}</p>}
      <h3>7s</h3>
      {csr7s && <p>{csr7s}</p>}
      <h3>8s</h3>
      {csr8s && <p>{csr8s}</p>}
      <h3>9s</h3>
      {csr9s && <p>{csr9s}</p>}
    </main>
  );
};

export default LateTest;
