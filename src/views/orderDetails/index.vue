<template>
  <div class="main">
    <span class="header">
      <span class="title">订单状态</span>
      <span class="step">
        <span class="item" @click="changeStep(1)">
          <span :class="currentStep == 1 ? 'num_selected' : 'num'">1</span>
          <span class="name">...</span>
        </span>
        <span class="item" @click="changeStep(2)">
          <span :class="currentStep == 2 ? 'num_selected' : 'num'">2</span>
          <span class="name">已包装</span>
        </span>
        <span class="item" @click="changeStep(3)">
          <span :class="currentStep == 3 ? 'num_selected' : 'num'">3</span>
          <span class="name">已成品入库</span>
        </span>
        <span class="item" @click="changeStep(4)">
          <span :class="currentStep == 4 ? 'num_selected' : 'num'">4</span>
          <span class="name">已发货</span>
        </span>
        <span class="item" @click="changeStep(5)">
          <span :class="currentStep == 5 ? 'num_selected' : 'num'">5</span>
          <span class="name">已经销商收货</span>
        </span>
        <span class="item" @click="changeStep(6)">
          <span :class="currentStep == 6 ? 'num_selected' : 'num'">6</span>
          <span class="name">订单完结</span>
        </span>
        <span class="item" @click="changeStep(7)">
          <span :class="currentStep == 7 ? 'num_selected' : 'num'">7</span>
          <span class="name">...</span>
        </span>
      </span>
    </span>
    <span class="order_info">
      <span class="title">订单详情</span>
      <span class="main_field">
        <span class="row_field">
          <span class="field">
            <span class="label">订单编号：</span>
            <span class="value">CS0011-06665-01</span>
            <span v-if="false" class="view">查看</span>
          </span>
          <span class="field">
            <span class="label">销售类型：</span>
            <span class="value">零售</span>
          </span>
          <span class="field">
            <span class="label">客户来源：</span>
            <span class="value">自然进店</span>
          </span>
        </span>
        <span class="row_field">
          <span class="field">
            <span class="label">交期类型：</span>
            <span class="value">标准产品类</span>
          </span>
          <span class="field">
            <span class="label">订单状态：</span>
            <span class="value">已财务批准</span>
          </span>
          <span class="field">
            <span class="label">加急类型：</span>
            <span class="value">正常交期</span>
          </span>
        </span>
        <span class="row_field">
          <span class="field">
            <span class="label">生产单号：</span>
            <span class="value">H404304</span>
          </span>
          <span class="field">
            <span class="label">交期天数：</span>
            <span class="value">35</span>
          </span>
          <span class="field">
            <span class="label">预计延迟天数：</span>
            <span class="value">0</span>
          </span>
        </span>
      </span>
      <span class="title">其他字段</span>
      <span class="other_field">
        <span class="row_field">
          <span class="field">
            <span class="label">示例字段：</span>
            <span class="status1">未全部入库</span>
          </span>
          <span class="field">
            <span class="label">示例字段：</span>
            <span class="value">示例</span>
          </span>
          <span class="field">
            <span class="label">示例字段：</span>
            <span class="value">示例</span>
          </span>
        </span>
        <span class="row_field">
          <span class="field">
            <span class="label">示例字段：</span>
            <span class="value">示例</span>
          </span>
          <span class="field">
            <span class="label">示例字段：</span>
            <span class="value">示例</span>
          </span>
          <span class="field">
            <span class="label">示例字段：</span>
            <span class="value">示例</span>
          </span>
        </span>
      </span>
    </span>
    <span class="order_list">
      <span class="table_title">订单明细</span>
      <span class="table_content">
        <el-table
          :data="tableDataOrderDetials"
          :stripe="false"
          style="width: 100%"
        >
          <el-table-column prop="text1" label="订单明细编号" />
          <el-table-column prop="text2" label="大类" />
          <el-table-column prop="text3" label="其他字段" />
          <el-table-column prop="text4" label="油漆颜色" />
          <el-table-column prop="text5" label="修改时间" />
          <el-table-column prop="text6" label="创建时间" />
          <el-table-column prop="text7" label="操作" width="80px">
            <template #default="scope">
              <div
                style="
                  display: flex;
                  align-items: center;
                  color: #165dff;
                  cursor: pointer;
                "
                @click="console.log(scope)"
              >
                查看
              </div>
            </template>
          </el-table-column>
        </el-table>
      </span>
      <el-pagination
        class="table_pagination"
        :page-size="20"
        :pager-count="11"
        layout="total, prev, pager, next"
        :total="50"
      />
    </span>
    <span class="related_documents_list">
      <span class="table_title">相关单据</span>
      <span class="table_content">
        <el-table
          :data="tableDataRelatedDocuments"
          :stripe="false"
          style="width: 100%"
        >
          <el-table-column prop="text1" label="单据编号" />
          <el-table-column prop="text2" label="类别" />
          <el-table-column prop="text3" label="其它字段" />
          <el-table-column prop="text4" label="状态" />
          <el-table-column prop="text5" label="修改时间" />
          <el-table-column prop="text6" label="操作" width="80px">
            <template #default="scope">
              <div
                style="
                  display: flex;
                  align-items: center;
                  color: #165dff;
                  cursor: pointer;
                "
                @click="console.log(scope)"
              >
                查看
              </div>
            </template>
          </el-table-column>
        </el-table>
      </span>
      <el-pagination
        class="table_pagination"
        :page-size="20"
        :pager-count="11"
        layout="total, prev, pager, next"
        :total="50"
      />
    </span>
    <span class="aciton_list">
      <el-button type="primary" class="primary_btn">问题提报</el-button>
    </span>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, getCurrentInstance, reactive } from "vue"

const { proxy }: any = getCurrentInstance()

const currentStep = ref(1)

const tableDataOrderDetials = ref([
  {
    text1: "CS0011-06665-01",
    text2: "门套",
    text3: "示例字段...",
    text4: "混油米灰1#",
    text5: "2021-02-28 10:30:50",
    text6: "",
  },
  {
    text1: "CS0011-06665-01",
    text2: "门套",
    text3: "示例字段...",
    text4: "混油米灰1#",
    text5: "2021-02-28 10:30:50",
    text6: "",
  },
  {
    text1: "CS0011-06665-01",
    text2: "门套",
    text3: "示例字段...",
    text4: "混油米灰1#",
    text5: "2021-02-28 10:30:50",
    text6: "",
  },
  {
    text1: "CS0011-06665-01",
    text2: "门套",
    text3: "示例字段...",
    text4: "混油米灰1#",
    text5: "2021-02-28 10:30:50",
    text6: "",
  }
])

const tableDataRelatedDocuments = ref([
  {
    text1: "CS0011-06665-01",
    text2: "安装派工单",
    text3: "示例字段...",
    text4: "已完成",
    text5: "2021-02-28 10:30:50",
    text6: "",
  },
  {
    text1: "CS0011-06665-01",
    text2: "安装派工单",
    text3: "示例字段...",
    text4: "已完成",
    text5: "2021-02-28 10:30:50",
    text6: "",
  },
  {
    text1: "CS0011-06665-01",
    text2: "安装派工单",
    text3: "示例字段...",
    text4: "已完成",
    text5: "2021-02-28 10:30:50",
    text6: "",
  },
  {
    text1: "CS0011-06665-01",
    text2: "安装派工单",
    text3: "示例字段...",
    text4: "已完成",
    text5: "2021-02-28 10:30:50",
    text6: "",
  },
])




const changeStep = (step) => {
  currentStep.value = step
}
</script>

<style lang="scss" scoped>
@import "./components/index.scss";
</style>
