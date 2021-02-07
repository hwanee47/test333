<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html lang="ko">
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="keywords" content="GWDS">
<meta name="description" content="GWDS" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="GWDS"/>
<meta name="twitter:site" content="GWDS" />
<meta name="twitter:creator" content="GWDS"/>
<meta name="twitter:image" content="../img/m_img.jpg" />
<meta name="twitter:description" content="GWDS"/>
<meta property="og:title" content="글로벌 네트워크 | GWDS">    
<meta property="og:site_name" content="GWDS"/>
<meta property="og:type" content="article"/>
<meta property="og:url" content="https://www.moonsoft.com"/>
<meta property="og:image" content="../img/m_img.jpg">
<meta property="og:description" content="GWDS"/>
<title>GWDS</title>
<link rel="image_src" href="../img/m_img.jpg"/>
<link rel="shortcut icon" href="../img/cj.ico" type="image/x-icon" />

<meta name="author" content="" />
<meta name="Resource-type" content="Document" />

<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/dist/fullpage.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/css/examples.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/css/common.css" />

<script type="text/javascript" src="${pageContext.request.contextPath}/web/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/web/js/common.js"></script>

</head>
<body>

<style>
/*common-error*/
.common-error{position:relative;width:1080px;margin:0 auto;padding-top:100px;padding-bottom:50px;/*height:100%;min-height:750px;*/text-align:center;}
.common-error > .inner{/*position:absolute;top:50%;left:50%;width:100%;transform:translate(-50%, -50%);*/}
.common-error .common-boxLineType-1{padding:50px;}
.common-error .logo{font-size:14px; margin-bottom:40px;}
.common-error .logo img{vertical-align:top;}
.common-error .list-1{}
.common-error .list-1 > dt{font-size:36px;line-height:46px;color:#007ac3;letter-spacing:-0.01em;}
.common-error .list-1 > dd{margin-top:18px;padding:0 260px;font-size:16px;line-height:28px;color:#007ac3;letter-spacing:-0.01em;}
.common-error .list-1 .icon{display:block;padding-top:105px;background:url('https://www.cjlogistics.com/static/pc/global/template/images/error/icon_error_1.png') no-repeat 50% 0;}
.common-error .btn-1{margin-top:55px;}
.common-error .btn-1 .common-btnType-1{margin:0 25px;vertical-align:top;}
.common-error .footer{margin-top:43px; border-top:none;}
.common-error .footer .txt-1{font-size:12px;line-height:22px;color:#666;letter-spacing:-0.01em;}

.common-btnType-1{position:relative;display:inline-block;}
.common-btnType-1 input:hover{text-decoration:underline;}
.common-btnType-1 a,
.common-btnType-1 input,
.common-btnType-1 .no-link{position:relative;display:inline-block;height:auto;padding:12px 52px;font-size:16px;line-height:26px;color:#007ac3;vertical-align:top;font-family:'NSKB';letter-spacing:0.02em;border:solid 1px;}
.common-btnType-1 .line-right{position:absolute;box-sizing:border-box;bottom:15px;right:0;height:calc(100% - 15px);border-left:3px solid #007ac3;border-bottom:2px solid transparent;transition-delay:0s;}
.common-btnType-1 .line-right:after{content:'';position:absolute;box-sizing:border-box;bottom:-2px;right:0;height:0;transition-delay:0s;}
.common-btnType-1 .line-top{position:absolute;box-sizing:border-box;top:0;right:0;width:100%;border-bottom:3px solid #007ac3;}
.common-btnType-1 .line-top:after{content:'';position:absolute;box-sizing:border-box;top:0;right:0;width:0;border-bottom:3px solid #e2293a;transition-delay:0s;}
.common-btnType-1 .line-left{position:absolute;box-sizing:border-box;top:0;left:0;height:100%;border-right:3px solid #007ac3;}
.common-btnType-1 .line-left:after{content:'';position:absolute;box-sizing:border-box;top:0;left:0;height:0;border-right:3px solid #e2293a;transition-delay:0s;}
.common-btnType-1 .line-bottom{position:absolute;box-sizing:border-box;bottom:0;left:0;width:calc(100% - 16px);border-top:3px solid #007ac3;}
.common-btnType-1 .line-bottom:after{content:'';position:absolute;box-sizing:border-box;bottom:0;left:0;width:0;border-top:3px solid #e2293a;transition-delay:0s;}
.common-btnType-1 .line-diag{position:absolute;box-sizing:border-box;bottom:0;left:calc(100% - 16.3px);width:22px;border-top:3px solid #007ac3;transform: translate(0, -6.3px) skew(0,-30deg);transition-delay:0s;}
.common-btnType-1 .line-diag:after{content:'';position:absolute;box-sizing:border-box;bottom:0;left:0;width:0;border-top:3px solid #e2293a;transition-delay:0s;}
.common-btnType-1.type-2 a,
.common-btnType-1.type-2 input,
.common-btnType-1.type-2 input{color:#666;}
.common-btnType-1.type-2 .no-link{color:#666;}
.common-btnType-1.type-2 .line-right{border-left:3px solid #999;}
.common-btnType-1.type-2 .line-top{border-bottom:3px solid #999;}
.common-btnType-1.type-2 .line-left{border-right:3px solid #999;}
.common-btnType-1.type-2 .line-bottom{border-top:3px solid #999;}
.common-btnType-1.type-2 .line-diag{border-top:3px solid #999;}
.common-btnType-1.type-2 .line-diag:after{border-top:3px solid #999;}
.common-boxLineType-1{position:relative;}
.common-boxLineType-1 > .line-right{position:absolute;box-sizing:border-box;bottom:20px;right:0;height:calc(100% - 20px);border-left:1px solid #e3e4e5;}
.common-boxLineType-1 > .line-top{position:absolute;box-sizing:border-box;top:0;right:0;width:100%;border-bottom:1px solid #e3e4e5;}
.common-boxLineType-1 > .line-left{position:absolute;box-sizing:border-box;top:0;left:0;height:100%;border-right:1px solid #e3e4e5;}
.common-boxLineType-1 > .line-bottom{position:absolute;box-sizing:border-box;bottom:0;left:0;width:calc(100% - 34px);border-top:1px solid #e3e4e5;}
.common-boxLineType-1 > .line-diag{position:absolute;box-sizing:border-box;bottom:0;left:calc(100% - 34px);width:34px;border-top:1px solid #e3e4e5;transform: translate(0, -10px) skew(0,-30deg);}
</style>

<div class="box-pmCms">

	<div class="common-error">
		<div class="inner">
		
			<div class="common-boxLineType-1">
				<span class="line-right"></span>
				<span class="line-top"></span>
				<span class="line-left"></span>
				<span class="line-bottom"></span>
				<span class="line-diag"></span>
				<dl class="list-1">
					<dt><span class="icon">서버 내부 오류가 발생하였습니다.</span></dt>
					<dd>시스템 관리자에게 문의 바랍니다.<br>
						<!--<a href="/ko/support" style="color:#666;"><strong>[고객지원 바로가기]</strong></a> -->
					</dd>
				</dl>
				<p class="btn-1">
					<span class="common-btnType-1">
						<a href="/GWDS/gwds/index_w.jsp">홈으로</a>
						
					</span><span class="common-btnType-1 type-2">
						<a href="javascript:history.back();">이전페이지로</a>
						
					</span>
				</p>
			</div>
		</div>
	</div>

</div>


</body>
</html>