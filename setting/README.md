#功能说明
 * 个人简历page
   * 1、显示页面所需内容
   * 2、交互说明：
     * 点击修改基础信息，展示修改简历page的「修改资料」tap
     * 点击重置密码，展示修改简历page的「重置密码」
     * 点击增加认证信息，展示修改简历page 的「增加认证信息」
     * 选择默认机构 - api 获取机构list
     * 选择默认打开区 - api 获取区list

 * 修改简历page
  *  1、账号名称不可改。个人资料。重新输入用户名称异步验证。做placeholder提示即可
  *  2、监听是否有触发修改。如有修改，则将「确定修改」按钮设置成able
  *  3、点击头像则触发重新上传。如无头像，显示可点击上传头像提示
  *  4、重置密码说明：
     * 验证旧密码(考虑增加忘记密码通道)
     * 输入新密码与旧密码进行匹配
  *  5、认证信息说明：
     * 账号不能修改
     * 手机号码可以修改，并且当没有绑定时，需要提示绑定。修改手机号码时，需要发送验证码给手机，另外要提供图片验证码给用户输入验证。
     * 电子邮箱验证，发送邮件给相关账号进行验证。
     * 提示输入身份证号。匹配是否正确。
     * 点击上传身份证照片
     * 点击「预览个人信息」返回「个人简历」界面
 
 * 过渡动画说明
  * 个人简历page  =>  修改简历page：左侧栏，往下滑动并消失。「修改界面」的左侧栏从上往下滑动出现；右侧，顺序往右滑出。
  * 修改简历page动画：a 锚点定位时，实现平滑移动
  * 个人简历page：等级认证由大到小出现，模仿现实中盖章的效果