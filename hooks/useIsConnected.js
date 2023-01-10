import {
    SignBytesFailed,
    Timeout,
    useConnectedWallet,
    UserDenied,
    verifyBytes,
  } from '@terra-money/wallet-provider';
import { useCallback, useState } from 'react';

const TEST_BYTES = Buffer.from('hello'); // resolves to <Buffer 68 65 6c 6c 6f>
export const useIsConnected = (type) => {

    const [txResult, setTxResult] = useState(null);
    const [txError, setTxError] = useState(null);
    const [verifyResult, setVerifyResult] = useState(null);

    const connectedWallet = useConnectedWallet();
    console.log("before",connectedWallet)

  const signBytes = useCallback( async () => {
    console.log("inside",connectedWallet);
    if (!connectedWallet) {
        console.log("conn null",connectedWallet)
      return;
    }

    try {
        console.log("connected",TEST_BYTES)
        const signedBytes = await connectedWallet.signBytes(TEST_BYTES);
        console.log("signb",signedBytes)
        setTxResult(signedBytes);
        setTxError(null);
        const result = verifyBytes(TEST_BYTES, signedBytes.result);
        setVerifyResult(result ? 'Verified' : 'Verification failed');

    } catch (error) {
        console.log("some err")
        setTxResult(null);
        setVerifyResult(null);
        if (error instanceof UserDenied) {
            setTxError('User Denied');
        } else if (error instanceof Timeout) {
            setTxError('Timeout');
        } else if (error instanceof SignBytesFailed) {
            setTxError('Sign Bytes Failed');
        } else {
            setTxError(
            'Unknown Error: ' +
                (error instanceof Error ? error.message : String(error)),
            );
        }
    }
  }, [connectedWallet]);

  return {
    signBytes,
    txResult,
    txError,
    verifyResult
  }
}
