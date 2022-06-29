import React, {useEffect} from "react";
import {useNavigate,useParams, useSearchParams} from "react-router-dom";
import axios from "axios";
import {useSetRecoilState} from 'recoil'
import userToken from "@recoil/userAtom"

function Oauth() {
  const [searchParams] = useSearchParams();
  const parmas = useParams();
  const code = searchParams.get('code')
  const navigate = useNavigate()
  const serverLoc = process.env.REACT_APP_SERVER_LOC
  const socialState = parmas.social
  const setUserToken = useSetRecoilState(userToken)

  // 인가코드 전달
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${serverLoc}/user/oauth/${socialState}?code=${code}`
        )
        const token = res.headers.authorization;
        // recoil에 token 저장
        setUserToken(token)
        console.log('res',res,'token',token)
        // 메인으로 이동 필요
      } catch (e) {
        console.error(e);
        // 메인으로 이동 필요
      }
    })();
  }, [socialState, serverLoc, code, navigate, setUserToken])

  return (
    <div>
      로그인 중, 인가코드 : {code}
    </div>
  )
}

export default Oauth
